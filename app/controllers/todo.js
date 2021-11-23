const Mongoose = require('mongoose');
const Todo = Mongoose.model('Todo');

const getTodo = (req, res, next) => {
    const query = Todo.find({}, (error, todo) => {
        if (error) {
            return next (error);
        } else {
            res.status(200).json(todo);

        }
    })
};

const getTodoID = (req, res, next) => {
        const query = Todo.findOne({_id: req.params.id }, (error, todo) => {
            if (error) {
                return next (error);
            } else {
                res.status(200).json(todo);
    
            }
        })
    };

const getTodoTodo = (req, res, next) => {
    const query = Todo.findOne({ name: req.params.todo }, (error, todo) => {
        if (error) {
            return next (error);
        } else {
            res.status(200).json(todo);

        }
    })
};

const createTodo = (req, res, next) => {
    let todo = new Todo(req.body);
    todo.save().then (result => {
    res.status(201).json(result);
    })
    .catch(error => {
    return next(error);
    });
}

const updateTodo = (req, res, next) => {
    Todo.findOneAndUpdate({ _id: req.body._id }, req.body, {new: true, safe: true, multi: false}, (error, todo) => {
        if (error) {
            return next (error);
        } else {
            res.status(200).json(todo);

        }
    })
 };

const deleteTodo = (req, res, next) => {
    Todo.remove({_id: req.params.id }, (eror, todo) => {
        if (error) {
            return next (error);
        } else {
            res.status(200).json(todo);

        }
    })
 };


module.exports = {
    getTodo,
    getTodoID,
    getTodoTodo,
    createTodo,
    updateTodo,
    deleteTodo
};