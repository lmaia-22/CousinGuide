import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findRankings() {
  return await prisma.ranking.findMany({
    orderBy: { 
        ranking: 'asc'
    }
  });
}

async function findTop100Rankings() {
    return await prisma.ranking.findMany({
        take: 100,
        orderBy: { 
            ranking: 'asc'
        }
      });
}

async function findTop10Rankings() {
    return await prisma.ranking.findMany({
        take: 10,
        orderBy: { 
            ranking: 'asc'
        }
      });
}

async function createRestaurantRanking(data: any) {
  let ranking: Prisma.RankingCreateInput;
  ranking = data;
  return await prisma.ranking.create({
    data: ranking,
  });
}

async function updateRestaurantRanking(id: string, data: any) {
  return await prisma.ranking.update({
    where: { id },
    data,
  });
}

async function deleteRestaurantRanking(id: string) {
  return await prisma.ranking.delete({
    where: { id },
  });
}

export default {
  findRankings,
  findTop100Rankings,
  findTop10Rankings,
  createRestaurantRanking,
  updateRestaurantRanking,
  deleteRestaurantRanking,
};
