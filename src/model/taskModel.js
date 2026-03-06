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
  if (description === undefined || completed === undefined)
    return "No description or complete status provided.";

  if (
    String(completed).toLowerCase() !== "true" &&
    String(completed).toLowerCase() !== "false"
  )
    return "Error: Completed must be 'true' or 'false'";
  const completedBoolean = completed === "true" ? 1 : 0;
  const query = "INSERT INTO tasks (description, completed) VALUES (?, ?)";
  const params = [description, completedBoolean];
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
  if (description === undefined || completed === undefined || id === undefined)
    return "No ID or description or complete status provided.";

  if (
    String(completed).toLowerCase() !== "true" &&
    String(completed).toLowerCase() !== "false"
  )
    return "Error: Completed must be 'true' or 'false'";

  const completedBoolean = completed === "true" ? 1 : 0;

  const query = "UPDATE tasks SET description = ?, completed = ? WHERE id = ? ";
  const params = [description, completedBoolean, id];
  return await DatabaseService.query(query, params);
  
};

model.all = async () => {
  const query = "SELECT * FROM tasks";
  return await databaseService.query(query);
}
