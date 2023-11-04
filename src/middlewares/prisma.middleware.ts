const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

prisma.$use(async (params: any, next: any) => {
  if (params.model === "Rating" && params.action === "create") {
    const { data } = params.args;
    ['location', 'food', 'ambient', 'service', 'price', 'waitingTime', 'security', 'parking'].forEach(field => {
      if (data[field] < 0 || data[field] > 10) {
        throw new Error(`${field} must be between 0 and 10`);
      }
    });
  }

  if (params.model === "Review" && params.action === "create") {
    const { data } = params.args;
    if (data.score < 0 || data.score > 10) {
      throw new Error(`score must be between 0 and 10`);
    }
  }

  return next(params);
});

async function main() {
  async function main() {
    try {
      // Prisma client calls
      const createdRating = await prisma.rating.create({
        data: {
          location: 5,
          food: 8,
          ambient: 7,
          service: 9,
          price: 6,
          waitingTime: 7,
          security: 8,
          parking: 6,
        },
      });
  
      const createdReview = await prisma.review.create({
        data: {
          score: 9,
        },
      });
  
      console.log("Created rating: ", createdRating);
      console.log("Created review: ", createdReview);
    } catch (e) {
      throw e;
    } finally {
      await prisma.$disconnect();
    }
  }
}

main()
  .catch(e => {throw e})
  .finally(async () => await prisma.$disconnect());
