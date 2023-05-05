import express from "express";
import "express-async-errors";
import { studentsRouter } from "./routes/studentsRouter";

const app = express();
app
	.use(express.json())
	.use("/students", studentsRouter);


export default app;