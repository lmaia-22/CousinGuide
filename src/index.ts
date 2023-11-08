import { Elysia } from 'elysia';
import { logger } from '@grotto/logysia';
import { securitySetup } from './startup/security'
import { docsSetup } from './startup/docs';
import { hooksSetup } from './startup/hooks';
import signup from "./routes/signup";
import users from "./routes/userRoutes.ts";
import restaurants from "./routes/restaurantRoutes.ts";
import rankings from "./routes/rankingRoutes.ts";
import ratings from "./routes/rankingRoutes.ts";

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .use(securitySetup)
  //.use(docsSetup)
  //.use(logger())
  .use(hooksSetup)
  .get('/', () => 'Hello Bun.js!')
  .group('/signup', (app) => {
    app.use(signup);
    return app;
  })
  .group('/users', (app) => {
    app.use(users);
    return app;
  })
  .group('/restaurants', (app) => {
    app.use(restaurants);
    return app;
  })
  .group('/rankings', (app) => {
    app.use(rankings);
    return app;
  })
  .group('/ratings', (app) => {
    app.use(ratings);
    return app;
  })
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });
