import dotenv from "dotenv"
dotenv.config();

import express from 'express';
import cors from 'cors';

import { tasksController } from './modules/tasks/controller.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.use("/api/task", tasksController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});