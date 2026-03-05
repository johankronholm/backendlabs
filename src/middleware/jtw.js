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
  const token = req.headers["token"];
  if (!token) return res.status(401).send("Error: No token provided.");
  try {
    jwt.verify(token, process.env.PRIVATE_KEY);
    next();
  } catch (err) {
    res.status(400).send("Error: Invalid/Expired token.");
  }
  res.status(500).send("Error: Something unexpected happened.");
};
