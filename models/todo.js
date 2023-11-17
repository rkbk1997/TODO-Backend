const mongoose = require('mongoose');

const todoListSchema = mongoose.Schema({
	title: String,
	discription: String,
	status: String
});

module.exports = mongoose.model('todoList', todoListSchema);