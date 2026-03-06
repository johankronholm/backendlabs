import express, { urlencoded } from "express";
import helmet from "helmet";
import { router } from "./routes/index.js";
import session from "express-session";

export const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.PRIVATE_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use("/", router);
