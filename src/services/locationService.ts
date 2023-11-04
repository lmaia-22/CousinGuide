import locationModel from '../models/locationModel.ts';
import validateLocation from '../models/validators/locationValidator.ts';

async function getLocations() {
  return await locationModel.findLocations();
}

async function getLocation(id: string) {
  return await locationModel.findLocation(id);
}

async function createLocation(data: any) {
  const validatedLocation = validateLocation(data);
  return await locationModel.createLocation(validatedLocation);
}

async function updateLocation(id: string, data: any) {
  const validatedLocation = validateLocation(data);
  return await locationModel.updateLocation(id, validatedLocation);
}

async function deleteLocation(id: string) {
  return await locationModel.deleteLocation(id);
}

export default {
  getLocations,
  getLocation,
  createLocation,
  updateLocation,
  deleteLocation,
};
