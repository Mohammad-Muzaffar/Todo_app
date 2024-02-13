const express = require('express');
const app = express();
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const cors = require('cors');

const port = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

app.get('/getTodos', async function(req,res){
    // Write geting todos code form database
    const todos = await todo.find({});
    res.status(200).json({
        todos : todos
    });
});

app.post('/postTodo', async function(req,res){
    // Write updating todo logic
    const createPayload = req.body;
    const paresedPayload = createTodo.safeParse(createPayload);
    if(!paresedPayload.success){
        res.status(411).json({
            msg : "Wrong inputs"
        });
        return;
    }
    // All things are right then put it in mongoDB
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    });

    res.status(200).json({
        msg : "Todo Created"
    });
});

app.put('/completed', async function(req,res){
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);
    if(!paresedPayload.success){
        res.status(411).json({
            msg : "Wrong inputs"
        });
        return;
    }
    const updatedTodo = await todo.findOneAndUpdate({
        _id : req.body.id
    },{
        completed : true
    });
    res.status(200).json(
        {msg : "todo marked as completed."}
    );
});

app.listen(port);