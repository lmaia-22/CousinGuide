import ratingController from '../controllers/ratingController.ts';
import Elysia from 'elysia';

const restaurants = new Elysia()
.get('/', ratingController.getRatings)
.get('/:id', ratingController.getRating)
.get('/restaurant/:id', ratingController.getRestaurantRating)
.get('/restaurant/:id/survey', ratingController.getRestaurantsByRatingBySurvey)
.post('/', ratingController.createRating)
.put('/:id', ratingController.updateRating)
.delete('/:id', ratingController.deleteRating)

export default restaurants;

