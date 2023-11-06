# cousinguide

## Todo: 
- Validate schema Restaurant and Location
- Feature00 -> Management of Users - 100%
- Feature01 -> Management of Restaurants - 30%
- Feature02 -> Management of Rankings - 0%
- Feature03 -> Algorithm to calculate restaurant rank - 0%
- Feature04 -> Manage restaurant and users reviews - 0%
- Feature05 -> Create Random Surveys (when launched?) - 0%
- Feature06 -> Cron job to update restaurants rankings based on surveys and reviews - 0%
- Feature07 -> Signup, Sign out, login - 0%
- Feature08 -> Bearer token, cors and helment implementation - 20%
- Feature09 -> Swager Documentation - 10%
- Feature10 -> Infrastrucutre Support - 10%
- Feature11 -> Beanchmark -> https://docs.codspeed.io/benchmarks/nodejs


## Issues:
- Cascade onDelete not working
- Reviews validate text (swear words)
- License Agreement
- User Location


## Blocks:
- Wait for Prisma PR with Geometry type be added -> https://github.com/prisma/prisma-engines/pull/4208

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
