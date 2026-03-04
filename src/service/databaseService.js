import mysql from "mysql2/promise";
import { config } from "../config/database.js";

class DatabaseService {
  connection = null;

  connect = async () => {
    if (this.connection === null) {
      try {
        this.connection = await mysql.createConnection(config);
        console.log("Succesfully connected to database.");
      } catch (err) {
        console.error("Could not connect to database", err);
      }
    }
  };

  query = async (qStrings, qParams) => {
    if (!this.connection) {
      await this.connect();
    }
    try {
      const [rows] = await this.connection.execute(qStrings, qParams);
      return rows;
    } catch (err) {
      console.error("Could not execute query", err);
    }
  };
}

export default new DatabaseService();
