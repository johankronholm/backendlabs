import express from "express"
import helmet from "helmet";
import { router } from "./routes/index.js"

export const app = express(); 

app.disable("x-powered-by");
app.use(helmet());
app.use(express.json());
app.use("/", router);