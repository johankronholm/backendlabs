import databaseService from "../service/databaseService.js";
import DatabaseService from "../service/databaseService.js";

export const model = {};

model.show = async (id) => {
  if (id === undefined) return "No ID provided";
  const query = "SELECT * FROM tasks WHERE id = ?";
  const params = [id];
  return await DatabaseService.query(query, params);
};

model.create = async (description, completed) => {
  const query = "INSERT INTO tasks (description, completed) VALUES (?, ?)";
  const params = [description, completed];
  return await DatabaseService.query(query, params);
};

model.delete = async (id) => {
  if (id === undefined) return "No ID provided.";
  const query = "DELETE FROM tasks WHERE id = ?";
  const params = [id];
  const result = await DatabaseService.query(query, params);
  return result.affectedRows > 0 ? result : "No task with that ID found.";
};

model.update = async (id, description, completed) => {

  const query = "UPDATE tasks SET description = ?, completed = ? WHERE id = ? ";
  const completedBoolean = completed === "1" ? 1 : 0;
  const params = [description, completedBoolean, id];
  return await DatabaseService.query(query, params);
  
};

model.all = async () => {
  const query = "SELECT * FROM tasks";
  return await databaseService.query(query);
}
