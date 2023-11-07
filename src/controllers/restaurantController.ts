import locationService from '../services/locationService.ts';
import restaurantService from '../services/restaurantService.ts';

async function getRestaurants(req: any) {
  try {
    const Restaurants = await restaurantService.getRestaurants();
    if(Restaurants === null) {
        return new Response(JSON.stringify('Doesnt exist any Restaurants'), { status: 404 }).json();
    }
    return new Response(JSON.stringify(Restaurants), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function getRestaurant(req: any) {
  try {
    const id = req.params.id;
    const Restaurant = await restaurantService.getRestaurant(id);
    if(!Restaurant) {
        return new Response(JSON.stringify('That Restaurant doesnt exist'), { status: 404 }).json();
    }
    return new Response(JSON.stringify(Restaurant), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function getRestaurantLocation(req: any) {
    try {
      const id = req.params.id;
      const Restaurant = await restaurantService.getRestaurantLocation(id);
      if(!Restaurant) {
          return new Response(JSON.stringify('We dont have the Restaurant Location'), { status: 404 }).json();
      }
      return new Response(JSON.stringify(Restaurant), { status: 200 }).json();
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 }).json();
    }
  }

  async function getRestaurantsByDistrict(req: any) {
    try {
      const district = req.params.district;
      const Restaurant = await restaurantService.getRestaurantsByDistrict(district);
      if(!Restaurant) {
          return new Response(JSON.stringify('We dont have the Restaurant Location'), { status: 404 }).json();
      }
      return new Response(JSON.stringify(Restaurant), { status: 200 }).json();
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 }).json();
    }
  }

async function createRestaurant(req: any) {
  try {
    const data = await req.body;
    const newRestaurant = await restaurantService.createRestaurant(data);
    return new Response(JSON.stringify(newRestaurant), { status: 201 }).json();
  } catch (error) {
    console.error('Error in createRestaurant:', error);
    if (error instanceof Error) {
      return new Response(JSON.stringify({ message: error.message }), { status: 400 }).json();
    }
    return new Response(JSON.stringify({ message: 'An error occurred' }), { status: 500 }).json();
  }
}

async function updateRestaurant(req: any) {
  try {
    const id = req.params.id;
    const data = await req.body;
    if( data.location){
        const newLocation = await locationService.createLocation(data.location);
        if(newLocation != null){
            const updatedRestaurant = await restaurantService.updateRestaurantLocation(id, data, newLocation.id);
            return new Response(JSON.stringify(updatedRestaurant), { status: 200 }).json();
        } else if(newLocation === null) {
        return new Response(JSON.stringify('Already exists a restaurant at that location'), { status: 400 }).json();
        }
    }
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
    return new Response(JSON.stringify('Deleted with Success'), { status: 204 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

export default {
  getRestaurants,
  getRestaurant,
  getRestaurantLocation,
  getRestaurantsByDistrict,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  
};
