import restaurantModel from '../models/restaurantModel.ts';
import validateRestaurant from '../models/validators/restaurantValidator.ts';

async function getRestaurants() {
  return await restaurantModel.findRestaurants();
}

async function getRestaurant(id: string) {
  return await restaurantModel.findRestaurant(id);
}

async function createRestaurant(data: any, locationId: string) {
  delete data['location'];
  data.locationId = locationId;
  console.log(data);
  const validatedRestaurant = validateRestaurant(data);
  return await restaurantModel.createRestaurant(validatedRestaurant);
}

async function updateRestaurant(id: string, data: any) {
  const validatedRestaurant = validateRestaurant(data);
  return await restaurantModel.updateRestaurant(id, validatedRestaurant);
}

async function deleteRestaurant(id: string) {
  return await restaurantModel.deleteRestaurant(id);
}

export default {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
