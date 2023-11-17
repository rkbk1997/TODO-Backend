const todoModel = require("../models/todo");

/**
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createToDo = async (req, res, next) => {
  console.log('req', req)
  const todoObj = await todoModel.create({
    ...req.body
  });
  res.send(todoObj);
};

const getTodoList = async (req, res, next) => {
  const todoList = await todoModel.find();
  res.send(todoList);
};

const getOneTodo = async (req, res, next) => {
  const todoList = await todoModel.findAll({status: req.body.status});
  res.send(todoList);
};

const deleteOneTodo = async (req, res, next) => {
  const todoList = await todoModel.findOneAndDelete({_id: req.body.id});
  res.send(todoList);
};

module.exports = { createToDo, getTodoList, deleteOneTodo };
