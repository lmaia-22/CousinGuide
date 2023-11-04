import { Elysia } from 'elysia';
import { logger } from '@grotto/logysia';
import { securitySetup } from './startup/security'
import { docsSetup } from './startup/docs';
import { hooksSetup } from './startup/hooks';
import signup from "./routes/signup";
import users from "./routes/usersRoutes.ts";
import restaurants from "./routes/restaurantRoutes.ts";

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .use(securitySetup)
  .use(docsSetup)
  .use(logger())
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
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });
