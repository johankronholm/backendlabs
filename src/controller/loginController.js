import { model } from "../model/loginModel.js"

export const controller = {};

controller.verifyUser = async (req, res) => {
    const token = await model.verifyUser(req.body.user, req.body.password);
    const data = {status : "Incorrect username/password!"}
    token ? res.json({token : token}) : res.render("login/home", data);
};
