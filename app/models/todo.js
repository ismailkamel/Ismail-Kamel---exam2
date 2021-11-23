const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const todoSchema = new Schema({
    todo: { type: String, required: true },
    Details: { type: String, required: false },
    date: { type: Date, required: true},
    dateCreated: { type: Date, default: Date.now },
    status: { type: String, enum: ['Todo', 'In Process', 'Done'], default: 'Todo'}
});

module.exports = Mongoose.model('Todo', todoSchema);