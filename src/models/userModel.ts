import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findUsers() {
  return await prisma.user.findMany({
    orderBy: { 
      username: 'asc'
    }
  });
}

async function findUser(id: string) {
  return await prisma.user.findUnique({
    where: { id },
  });
}

async function createUser(data: any) {
  let user: Prisma.UserCreateInput;
  user = data;
  return await prisma.user.create({
    data: user,
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
