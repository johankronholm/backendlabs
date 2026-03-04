import express from "express"
import helmet from "helmet";

export const app = express(); 

app.disable("x-powered-by");
app.use(helmet());