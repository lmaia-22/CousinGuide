import { PrismaClient, Prisma, Restaurant } from '@prisma/client';

const prisma = new PrismaClient();

async function findRestaurants() {
  return await prisma.restaurant.findMany({
    include: {
      location: {
        select: {
        district: true,
        latitude: true,
        longitude: true
        }
      }
    },
    orderBy: { 
      name: 'asc'
    }
    });
}

async function findRestaurant(id: string) {
  return await prisma.restaurant.findUnique({
    include: {
      location: {
        select: {
        district: true,
        latitude: true,
        longitude: true
        }
      }
    },
    where: { id }
  });
}

async function findRestaurantLocation(id: string) {
    return await prisma.restaurant.findUnique({
      select: {
          location: true,
      },
      where: { id }
    });
  }

  async function findRestaurantsByDistrict(district: string) {
    return await prisma.restaurant.findMany({
      select: {
          id: true,
          name: true,
          description: true,
      },
      where:{
        location: {
            district: district,
      },
      }
    });
  }

// ---------Option one without generated Types ----------------
// async function createRestaurant(data: any) {
//   const { name, description, location } = data;
//   return await prisma.restaurant.create({
//     data: {
//       name: name,
//       description: description,
//       location: {
//         create: {
//           district: location.district,
//           latitude: location.latitude,
//           longitude: location.longitude,
//         },
//       },
//     },
//     include: {
//       location: true
//     }
//   });
// }


// ---------Option two with generated Types ----------------
async function createRestaurant(data: any) {
  let restaurant: Prisma.RestaurantCreateInput;
  restaurant = data;
  return await prisma.restaurant.create({
    data: restaurant
  });
}

async function updateRestaurant(id: string, data: any) {
  const restaurant: Prisma.RestaurantUpdateInput = data;
  return await prisma.restaurant.update({
    where: { id },
    data: restaurant
  });
}
  

async function deleteRestaurant(id: string) {
  return await prisma.restaurant.delete({
    where: { id },
  });
}

export default {
  findRestaurants,
  findRestaurant,
  findRestaurantLocation,
  findRestaurantsByDistrict,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
