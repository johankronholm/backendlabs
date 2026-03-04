import { model } from "../model/taskModel.js";
export const controller = {};

controller.show = async (req, res) => {
  const { id } = req.body || {};
  const result = await model.show(id);
  res.json(result);
};

controller.create = async (req, res) => {
  const { description, completed } = req.body || {};
  const result = await model.create(description, completed);
  result.affectedRows > 0
    ? res.status(200).json(`Added new task with ID: ${result.insertId}`)
    : res.json(result);
};

controller.delete = async (req, res) => {
  const { id } = req.body || {};
  const result = await model.delete(id);
  result.affectedRows > 0
    ? res.status(200).json(`Deleted task with ID: ${id}`)
    : res.json(result);
};

controller.update = async (req, res) => {
  const { id, description, completed } = req.body || {};
  const result = await model.update(id, description, completed);
  result.affectedRows > 0
    ? res.status(200).json(`Updated task with ID: ${id}`)
    : res.json(result);
};
