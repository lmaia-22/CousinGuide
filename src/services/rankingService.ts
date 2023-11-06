import rankingModel from '../models/rankingModel.ts';
import validateRanking from '../models/validators/rankingValidator.ts';

async function getRankings() {
  return await rankingModel.findRankings();
}

async function getTop100Rankings() {
  return await rankingModel.findTop100Rankings();
}

async function getTop10Rankings() {
  return await rankingModel.findTop10Rankings();
}

async function createRestaurantRanking(data: any) {
  const validatedRanking = validateRanking(data);
  return await rankingModel.createRestaurantRanking(validatedRanking);
}

async function updateRestaurantRanking(id: string, data: any) {
    const validatedRanking = validateRanking(data);
    return await rankingModel.updateRestaurantRanking(id, validatedRanking);
}

async function deleteRestaurantRanking(id: string) {
    return await rankingModel.deleteRestaurantRanking(id);
}

export default {
  getRankings,
  getTop100Rankings,
  getTop10Rankings,
  createRestaurantRanking,
  updateRestaurantRanking,
  deleteRestaurantRanking,
};
 