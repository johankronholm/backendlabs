import jwt from "jsonwebtoken";

export const jsonWebToken = {};

jsonWebToken.createToken = (user) => {
  const token = jwt.sign(
    { use: user.username, role: user.role },
    process.env.PRIVATE_KEY,
    { expiresIn: "10m" },
  );
  return token;
};

jsonWebToken.verifyToken = (req, res, next) => {
  const token = req.headers["token"] || req.session.token;

  if (!token) {
    req.session.status = "Please provide a token.";
    return res.redirect("/login");
  }

  try {
    jwt.verify(token, process.env.PRIVATE_KEY);
    return next();
  } catch (err) {
    req.session.status = "Invalid/expired token.";
    return res.redirect("/login");
  }
};
