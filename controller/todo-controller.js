const todoModel = require("../models/todo");

/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createToDo = async (req, res, next) => {
  console.log('req', req)
  const todoObj = await todoModel.create({
    title: req.body.title,
    discription: req.body.discription,
    status: req.body.status.toLowerCase()
  });
  res.send(todoObj);
};

const getTodoList = async (req, res, next) => {
  const todoList = await todoModel.find();
  res.send(todoList);
};

const getTodoListOnStatus = async (req, res, next) => {
  if(req.body.status.toLowerCase() === 'all') {
    const todoList = await todoModel.find();
    res.send(todoList);
  }else {
    const todoList = await todoModel.find({status: req.body.status.toLowerCase()});
    res.send(todoList);
  }
};

const deleteOneTodo = async (req, res, next) => {
  const todoList = await todoModel.findOneAndDelete({_id: req.body.id});
  res.send(todoList);
};

module.exports = { createToDo, getTodoList, deleteOneTodo, getTodoListOnStatus };
