import bcrypt from "bcrypt";
import { jsonWebToken } from "../middleware/jtw.js";
export const model = {};

model.verifyUser = async (username, password) => {
  const user = {
    username: "doe",
    password: await bcrypt.hash("doe", 10),
    role: "admin",
  };

  if (
    username === user.username &&
    (await bcrypt.compare(password, user.password))
  ) {
    return jsonWebToken.createToken(user);
  }
  return false;
};
