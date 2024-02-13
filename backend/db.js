const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("<You'r mongodb url>");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
};
