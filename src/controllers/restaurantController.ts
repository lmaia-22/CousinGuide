import locationService from '../services/locationService.ts';
import restaurantService from '../services/restaurantService.ts';

async function getRestaurants(req: any) {
  try {
    const Restaurants = await restaurantService.getRestaurants();
    return new Response(JSON.stringify(Restaurants), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function getRestaurant(req: any) {
  try {
    const id = req.params.id;
    const Restaurant = await restaurantService.getRestaurant(id);
    return new Response(JSON.stringify(Restaurant), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function createRestaurant(req: any) {
  try {
    const data = await req.body;
    const newLocation = await locationService.createLocation(data.location);
    console.log(newLocation.id);
    const newRestaurant = await restaurantService.createRestaurant(data, newLocation.id);
    return new Response(JSON.stringify(newRestaurant), { status: 201 }).json();
  } catch (error) {
    console.log(error);
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function updateRestaurant(req: any) {
  try {
    const id = req.params.id;
    const data = await req.body;
    const updatedRestaurant = await restaurantService.updateRestaurant(id, data);
    return new Response(JSON.stringify(updatedRestaurant), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function deleteRestaurant(req: any) {
  try {
    const id = req.params.id;
    await restaurantService.deleteRestaurant(id);
    return new Response(null, { status: 204 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

export default {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
