import rankingModel from '../models/rankingModel.ts';
import validateRanking from '../models/validators/rankingValidator.ts';
import restaurantService from './restaurantService.ts';

async function getRankings() {
  return await rankingModel.findRankings();
}

async function getTopRankings(limit: any) {
  return await rankingModel.findTopRankings(limit);
}

async function createRestaurantRanking(data: any) {
  const validatedRanking = validateRanking(data);
  const restaurantExists = await restaurantService.getRestaurant(validatedRanking.restaurantId);
  if (!restaurantExists) {
    throw new Error('Restaurant does not exist');
  }
  return await rankingModel.createRestaurantRanking(validatedRanking);
}

async function updateRestaurantRanking(id: string, data: any) {
    const validatedRanking = validateRanking(data);
    const restaurantExists = await restaurantService.getRestaurant(validatedRanking.restaurantId);
    if (!restaurantExists) {
      throw new Error('Restaurant does not exist');
    }
    return await rankingModel.updateRestaurantRanking(id, validatedRanking);
}

async function deleteRestaurantRanking(id: string) {
    return await rankingModel.deleteRestaurantRanking(id);
}

export default {
  getRankings,
  getTopRankings,
  createRestaurantRanking,
  updateRestaurantRanking,
  deleteRestaurantRanking,
};
 