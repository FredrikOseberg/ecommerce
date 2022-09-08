import express from 'express';

import { ProductController } from './controllers/products-controller';
import { createServices, createStores } from './util';

const startApp = () => {
  const app = express();

  const stores = createStores();
  const services = createServices(stores);

  app.use(express.json());
  app.use('/products', new ProductController(services).router);

  app.listen(3000, () => {
    console.log('Application started on port 3000!');
  });
};

startApp();
