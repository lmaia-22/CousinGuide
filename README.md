# cousinguide

## Todo: 
- Feature00 -> Management of Users - 100%
- Feature01 -> Management of Restaurants - 80%
- Feature02 -> Management of Rankings - 100%
- Feature03 -> Management of Ratings - 0%
- Feature04 -> Management of Playlists- 0%
- Feature05 -> Algorithm to calculate restaurant rank - 0%
- Feature06 -> Manage restaurant and users reviews - 0%
- Feature07 -> Create Random Surveys (when launched?) - 0%
- Feature08 -> Cron job to update restaurants rankings based on surveys and reviews - 0%
- Feature09 -> Signup, Sign out, login - 20%
- Feature10 -> Bearer token, cors and helment implementation - 20%
- Feature11 -> Swager Documentation - 10%
- Feature12 -> Infrastrucutre Support - 10%
- Feature13 -> Beanchmark -> https://docs.codspeed.io/benchmarks/nodejs


## Issues:
- Cascade onDelete not working
- Reviews validate text (swear words)
- License Agreement
- User Location
- Update Restaurant with Location using generated Types by prisma

## Blocks:
- Wait for Prisma PR with Geometry type be added -> https://github.com/prisma/prisma-engines/pull/4208


## Explanation:
- Rating is where the value of all attributes is saved from a specific restaurant
- Ranking is the value calculated based on the Rating


## Deploy option 1:
- https://www.koyeb.com/docs/deploy/bun

## Dependencies used:

- elysiajs/cors
- elysiajs/html
- @elysiajs/jwt
- elysiajs/swagger
- grotto/logysia
- prisma/client
- elysia
- elysia-helmet
- joi
- mongoose
- prisma

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
