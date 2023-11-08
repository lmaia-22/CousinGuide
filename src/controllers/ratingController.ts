import rankingService from '../services/rankingService.ts';

async function getRatings(req: any) {
  try {
    const Rankings = await rankingService.getRankings();
    return new Response(JSON.stringify(Rankings), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

  async function getRating(req: any) {
    try {
      const limit = await parseInt(req.params.limit, 10);
      if (isNaN(limit) || limit <= 0) {
        throw new Error('The limit must be a positive integer.');
      }
      const Rankings = await rankingService.getTopRankings(limit);
      return new Response(JSON.stringify(Rankings), { status: 200 }).json();
    } catch (error) {
      console.error('Error in getTopRankings:', error);
      if (error instanceof Error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 400 }).json();
      }
      return new Response(JSON.stringify({ message: 'An error occurred' }), { status: 500 }).json();
    }
  }

  async function getRestaurantRating(req: any) {
    try {
      const data = req.body;
      const newRanking = await rankingService.createRestaurantRanking(data);
      return new Response(JSON.stringify(newRanking), { status: 201 }).json();
    } catch (error) {
      console.error('Error in createRestaurantRanking:', error); 
      if (error instanceof Error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 400 }).json();
      }
      return new Response(JSON.stringify({ message: 'An error occurred' }), { status: 500 }).json();
    }
  }
  
  

async function getRestaurantsByRatingBySurvey(req: any) {
  try {
    const id = req.params.id;
    const data = await req.body;
    const updatedRestaurantRanking = await rankingService.updateRestaurantRanking(id, data);
    return new Response(JSON.stringify(updatedRestaurantRanking), { status: 200 }).json();
  } catch (error) {
    console.error('Error in updateRestaurantRanking:', error); 
    if (error instanceof Error) {
      return new Response(JSON.stringify({ message: error.message }), { status: 400 }).json();
    }
    return new Response(JSON.stringify({ message: 'An error occurred' }), { status: 500 }).json();
  }
}

async function createRating(req: any) {
  try {
    const id = req.params.id;
    const deletedUser = await rankingService.deleteRestaurantRanking(id);
    return new Response(JSON.stringify(deletedUser),  { status: 204 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function updateRating(req: any) {
    try {
      const id = req.params.id;
      const deletedUser = await rankingService.deleteRestaurantRanking(id);
      return new Response(JSON.stringify(deletedUser),  { status: 204 }).json();
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 }).json();
    }
  }

  async function deleteRating(req: any) {
    try {
      const id = req.params.id;
      const deletedUser = await rankingService.deleteRestaurantRanking(id);
      return new Response(JSON.stringify(deletedUser),  { status: 204 }).json();
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 }).json();
    }
  }

export default {
  getRatings,
  getRating,
  getRestaurantRating,
  getRestaurantsByRatingBySurvey,
  createRating,
  updateRating,
  deleteRating
};
