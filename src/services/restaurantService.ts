import { Prisma } from '@prisma/client';
import restaurantModel from '../models/restaurantModel.ts';
import validateRestaurant from '../models/validators/restaurantValidator.ts';

async function getRestaurants() {
  return await restaurantModel.findRestaurants();
}

async function getRestaurant(id: string) {
  return await restaurantModel.findRestaurant(id);
}

async function getRestaurantLocation(id: string) {
  return await restaurantModel.findRestaurantLocation(id);
}

async function getRestaurantsByDistrict(district: string) {
  return await restaurantModel.findRestaurantsByDistrict(district);
}

async function createRestaurant(data: any) {
  const validatedRestaurant = validateRestaurant(data);
  return await restaurantModel.createRestaurant(validatedRestaurant);
}

async function updateRestaurant(id: string, data: any) {
  const validatedRestaurant = validateRestaurant(data);
  return await restaurantModel.updateRestaurant(id, validatedRestaurant);
}

async function updateRestaurantLocation(id: string, data: any, locationId: string) {
  const validatedRestaurant = validateRestaurant(data);
  return await restaurantModel.updateRestaurant(id, validatedRestaurant);
}

async function deleteRestaurant(id: string) {
  return await restaurantModel.deleteRestaurant(id);
}

export default {
  getRestaurants,
  getRestaurant,
  getRestaurantLocation,
  getRestaurantsByDistrict,
  createRestaurant,
  updateRestaurant,
  updateRestaurantLocation,
  deleteRestaurant,
};
