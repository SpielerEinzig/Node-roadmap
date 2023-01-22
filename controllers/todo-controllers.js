const TodoItem = require('../models/todo_model');

const todo_list = (req, res) => {
    TodoItem.find().then((result) =>{
        res.json(result);
    }).catch((error) =>  {
        console.log(error);
    });
}


const todo_detail = (req, res) => {
    const id = req.params.id;

    TodoItem.findById(id).then((result) => {
        res.json(result);
    }).catch((error) => {
        console.log(error);
    });
}

const create_todo = (req, res) => {
    const todoItem = new TodoItem(req.body);

    todoItem.save().then((result) => {
        res.json(result);
    }).catch((error) => {
        console.log(error);
        res.end();
    });
}

const delete_todo = (req, res) => {
    const id = req.params.id;

    TodoItem.findByIdAndDelete(id).then((result) => {
        console.log(result);
        const message = ({"messgae": "Item successfully deleted"});
        res.json(message);
    })
    .catch((error) => {
        console.log(error);
    });
}

const update_todo = (req, res) => {
    const id = req.params.id;

    TodoItem.findByIdAndUpdate(id, req.body, {new: true})
    .then((result) => {
        res.json(result);
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = {
    create_todo,
    todo_detail,
    todo_list,
    delete_todo,
    update_todo,
}