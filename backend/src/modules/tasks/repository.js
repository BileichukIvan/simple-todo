import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTask = async (title) => {
  return await prisma.task.create({
    data: { title }
  });
};

export const getTaskById = async (id) => {
  return await prisma.task.findUnique({
    where: { id }
  });
};

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

export const updateTask = async (id, updates) => {
  return await prisma.task.update({
    where: { id },
    data: updates
  });
};

export const deleteTask = async (id) => {
  return await prisma.task.delete({
    where: { id }
  });
};
