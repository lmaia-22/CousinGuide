import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findLocations() {
  return await prisma.location.findMany();
}

async function findLocation(id: string) {
  return await prisma.location.findUnique({
    where: { id },
  });
}

async function createLocation(data: any) {
  return await prisma.location.create({
    data,
  });
}

async function updateLocation(id: string, data: any) {
  return await prisma.location.update({
    where: { id },
    data,
  });
}

async function deleteLocation(id: string) {
  return await prisma.location.delete({
    where: { id },
  });
}

export default {
  findLocations,
  findLocation,
  createLocation,
  updateLocation,
  deleteLocation,
};
