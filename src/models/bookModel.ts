import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findBooks() {
  return await prisma.book.findMany();
}

async function findBook(id: string) {
  return await prisma.book.findUnique({
    where: { id },
  });
}

async function createBook(data: any) {
  return await prisma.book.create({
    data,
  });
}

async function updateBook(id: string, data: any) {
  return await prisma.book.update({
    where: { id },
    data,
  });
}

async function deleteBook(id: string) {
  return await prisma.book.delete({
    where: { id },
  });
}

export default {
  findBooks,
  findBook,
  createBook,
  updateBook,
  deleteBook,
};
