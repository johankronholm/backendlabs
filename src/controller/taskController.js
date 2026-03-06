import { model } from "../model/taskModel.js";
export const controller = {};

controller.show = async (req, res) => {
  const { id } = req.body || {};
  const result = await model.show(id);
  req.session.data = {
    task: result[0],
    prev: true,
    status: result[0] ? true : false,
  };
  res.render("home/show", req.session.data);
};

controller.all = async (req, res) => {
  const result = await model.all();
  req.session.data = { tasks: result };
  res.render("home/all", req.session.data);
};

controller.create = async (req, res) => {
  const { description, completed } = req.body || {};
  const result = await model.create(description, completed);
  req.session.data = {
    status: result.affectedRows > 0,
    prev: true,
    id: result.insertId,
  };
  res.render("home/new", req.session.data);
};

controller.delete = async (req, res) => {
  const { id } = req.body || {};
  const result = await model.delete(id);
  req.session.data = { status: result.affectedRows > 0, prev: true, id: id };
  res.render("home/remove", req.session.data);
};

controller.update = async (req, res) => {
  const { id, description, completed } = req.body || {};
  const result = await model.update(id, description, completed);
  req.session.data = { status: result.affectedRows > 0, prev: true, id: id };
  res.render("home/update", req.session.data);
};
