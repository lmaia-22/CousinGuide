import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findUsers() {
  return await prisma.user.findMany();
}

async function findUser(id: string) {
  return await prisma.user.findUnique({
    where: { id },
  });
}

async function createUser(data: any) {
  return await prisma.user.create({
    data,
  });
}

async function updateUser(id: string, data: any) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

async function deleteUser(id: string) {
  return await prisma.user.delete({
    where: { id },
  });
}

export default {
  findUsers,
  findUser,
  createUser,
  updateUser,
  deleteUser,
};
