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
  // ... your Prisma client calls
}

main()
  .catch(e => throw e)
  .finally(async () => await prisma.$disconnect());
