import { Elysia } from 'elysia';
import { logger } from '@grotto/logysia';
import { securitySetup } from './startup/security'
import { docsSetup } from './startup/docs';
import { hooksSetup } from './startup/hooks';
import signup from "./routes/signup";
import bookRoutes from './routes/bookRoutes';

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .use(securitySetup)
  .use(docsSetup)
  .use(logger())
  .use(hooksSetup)
  .get('/', () => 'Hello Bun.js!')
  .group('/book', (app) => {
    app.use(signup);
    return app;
  })
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });
