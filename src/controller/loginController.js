import { model } from "../model/loginModel.js";

export const controller = {};

controller.verifyUser = async (req, res, next) => {
  const token = await model.verifyUser(req.body.user, req.body.password);

  if (token) {
    req.session.token = token;
    return res.redirect("/");
  } else {
    req.session.status = "Incorrect username/password";
    res.redirect("/login");
  }

};
