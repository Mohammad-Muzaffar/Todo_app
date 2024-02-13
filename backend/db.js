const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb+srv://muzz:Muzz%23123@cluster0.8n8krzp.mongodb.net/Todo_app");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
};