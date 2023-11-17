const express = require('express');
const todo_api = require('./todo-api/index');
const app  = express();

app.use('/api', todo_api);

module.exports = app;