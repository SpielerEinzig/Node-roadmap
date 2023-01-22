const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: false},
});

const TodoItem = mongoose.model("todo", todoSchema);
module.exports = TodoItem;