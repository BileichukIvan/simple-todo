import { Router } from "express";

import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "./repository.js";

const router = Router()

router.get('/', async (req, res) => {
  const tasks = await getAllTasks();
  res.send(tasks);
});

router.get('/:id', async (req, res) => {
  const task = await getTaskById(req.params.id);

  if (!task) {
    return res.status(404).send({ message: 'Task not found' });
  }

  res.send(task);
});

router.post('/', async (req, res) => {
  const task = await createTask(req.body.title);
  res.status(201).send(task);
});

router.put('/:id', async (req, res) => {
  const task = await updateTask(
    Number(req.params.id),
    {
      title: req.body.title,
      completed: req.body.completed
    }
  );
  
  if (!task) {
    return res.status(404).send({ message: 'Task not found' });
  }
  
  res.send(task);
});

router.delete('/:id', async (req, res) => {
  const task = await deleteTask(Number(req.params.id));
  
  if (!task) {
    return res.status(404).send({ message: 'Task not found' });
  }
  
  res.send({ deleted: true });
});

export { router as tasksController }