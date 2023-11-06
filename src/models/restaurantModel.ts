import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findRestaurants() {
  return await prisma.restaurant.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            location: true,
          },
    });
}

async function findRestaurant(id: string) {
  return await prisma.restaurant.findUnique({
    select: {
        id: true,
        name: true,
        description: true,
        locationId: true,
        location: true,
    },
    where: { id }
  });
}

async function findRestaurantLocation(id: string) {
    return await prisma.restaurant.findUnique({
      select: {
          location: true,
      },
      where: { id }
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
  findRestaurantLocation,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
