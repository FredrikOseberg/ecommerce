import express, { Express } from 'express';

import { ProductController } from './controllers/products-controller';
import { errorHandler } from './errors/error-handlers';
import { IServices } from './interfaces/architecture';

export const createApp = (services: IServices): Express => {
  const app = express();

  app.use(express.json(), errorHandler);
  app.use('/products', new ProductController(services).router);

  app.use(errorHandler);

  return app;
};
