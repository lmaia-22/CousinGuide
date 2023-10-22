import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findUsers() {
  return await prisma.user.findMany();
}

async function signup() {
    return await prisma.user.findMany();
  }

export default {
    signup,
    findUsers
  };