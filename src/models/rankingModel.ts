import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function findRankings() {
  return await prisma.ranking.findMany({
    orderBy: { 
        ranking: 'asc'
    }
  });
}

async function findTopRankings(limit:any) {
  return await prisma.ranking.findMany({
      take: limit,
      orderBy: { 
          ranking: 'desc',
      },
      include: {
        restaurant: true,
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
  findTopRankings,
  createRestaurantRanking,
  updateRestaurantRanking,
  deleteRestaurantRanking,
};
