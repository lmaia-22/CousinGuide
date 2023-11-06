import rankingService from '../services/rankingService.ts';

async function getRankings(req: any) {
  try {
    const Rankings = await rankingService.getRankings();
    return new Response(JSON.stringify(Rankings), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function getTop100Rankings(req: any) {
    try {
      const Rankings = await rankingService.getTop100Rankings();
      return new Response(JSON.stringify(Rankings), { status: 200 }).json();
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 }).json();
    }
  }

  async function getTop10Rankings(req: any) {
    try {
        const Rankings = await rankingService.getTop10Rankings();
      return new Response(JSON.stringify(Rankings), { status: 200 }).json();
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 }).json();
    }
  }

async function createRestaurantRanking(req: any) {
  try {
    const data = await req.body;
    const newRanking = await rankingService.createRestaurantRanking(data);
    return new Response(JSON.stringify(newRanking), { status: 201 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function updateRestaurantRanking(req: any) {
  try {
    const id = req.params.id;
    const data = await req.body;
    const updatedRestaurantRanking = await rankingService.updateRestaurantRanking(id, data);
    return new Response(JSON.stringify(updatedRestaurantRanking), { status: 200 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

async function deleteRestaurantRanking(req: any) {
  try {
    const id = req.params.id;
    const deletedUser = await rankingService.deleteRestaurantRanking(id);
    return new Response(JSON.stringify(deletedUser),  { status: 204 }).json();
  } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 }).json();
  }
}

export default {
  getRankings,
  getTop100Rankings,
  getTop10Rankings,
  createRestaurantRanking,
  updateRestaurantRanking,
  deleteRestaurantRanking,
};
