import restaurantController from '../controllers/restaurantController.ts';
import Elysia from 'elysia';

const users = new Elysia()
.get('/', restaurantController.getRestaurants)
.get('/:id', restaurantController.getRestaurant)
.get('/:id/location', restaurantController.getRestaurantLocation)
.get('/location/:district', restaurantController.getRestaurantsByDistrict)
.post('/', restaurantController.createRestaurant)
.put('/:id', restaurantController.updateRestaurant)
.delete('/:id', restaurantController.deleteRestaurant)

export default users;

