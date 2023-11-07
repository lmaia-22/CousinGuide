import rankingController from '../controllers/rankingController.ts';
import Elysia from 'elysia';

const users = new Elysia()
.get('/', rankingController.getRankings)
.get('/:limit', rankingController.getTopRankings)
.post('/', rankingController.createRestaurantRanking)
.put('/:id', rankingController.updateRestaurantRanking)
.delete('/:id', rankingController.deleteRestaurantRanking)

export default users;

