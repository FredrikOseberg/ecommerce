import express from 'express';

import { ProductController } from './controllers/products-controller';
import { errorHandler } from './errors/error-handlers';

import { createServices, createStores } from './util';

const startApp = () => {
  const app = express();

  const stores = createStores();
  const services = createServices(stores);

  app.use(express.json(), errorHandler);
  app.use('/products', new ProductController(services).router);

  app.use(errorHandler);

  app.listen(3000, () => {
    console.log('Application started on port 3000!');
  });
};

startApp();
