import { model } from "../model/taskModel.js";
export const controller = {};

controller.show = async (req, res) => {
  const id = req.params.id;
  const result = await model.show(id);

  result.length > 0 ? req.session.status = "Success!" : req.session.status = "Error!";
  req.session.prev = "show";
  return result.length > 0 ? res.status(200).json(result[0]) : res.status(404).json({ message: "No task was found." });
};

controller.all = async (req, res) => {
  const result = await model.all();
  req.session.data = { tasks: result };
  result.length > 0 ? req.session.status = "Success!" : req.session.status = "Error!";
  req.session.prev = "all";
  return result.length > 0 ? res.status(200).json(result) : res.status(404).json({ message: "No tasks were found." });
};

controller.create = async (req, res) => {
  const { description, completed } = req.body || {};
  const result = await model.create(description, completed);
  result.affectedRows > 0 ? req.session.status = "Success!" : req.session.status = "Error!";
  req.session.prev = "new";
  return result.affectedRows > 0 ? res.status(201).json({ message: "Created new task." }) : res.status(400).json({ message: "Could not create task." });
};

controller.delete = async (req, res) => {
  const id = req.params.id;
  const result = await model.delete(id);
  result.affectedRows > 0 ? req.session.status = "Success!" : req.session.status = "Error!";
  req.session.prev = "remove";
  return result.affectedRows > 0 ? res.status(200).json({ message: "Removed task." }) : res.status(404).json({ message: "No task was found." });
};

controller.update = async (req, res) => {
  const id = req.params.id;
  const { description, completed } = req.body || {};
  const result = await model.update(id, description, completed);
  result.affectedRows > 0 ? req.session.status = "Success!" : req.session.status = "Error!";
  req.session.prev = "update";
  return result.affectedRows > 0 ? res.status(200).json({ message: "Updated task." }) : res.status(404).json({ message: "No task was found." });
};
