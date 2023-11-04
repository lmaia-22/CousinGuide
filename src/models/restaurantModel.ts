import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findRestaurants() {
  return await prisma.restaurant.findMany();
}

async function findRestaurant(id: string) {
  return await prisma.restaurant.findUnique({
    where: { id },
  });
}

async function createRestaurant(data: any) {
  return await prisma.restaurant.create({
    data,
  });
}

async function updateRestaurant(id: string, data: any) {
  return await prisma.restaurant.update({
    where: { id },
    data,
  });
}

async function deleteRestaurant(id: string) {
  return await prisma.restaurant.delete({
    where: { id },
  });
}

export default {
  findRestaurants,
  findRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
