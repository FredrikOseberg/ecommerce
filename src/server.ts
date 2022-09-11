import { createApp } from './app';
import { createServices, createStores } from './util';

const startApp = () => {
  const stores = createStores();
  const services = createServices(stores);

  const app = createApp(services);

  app.listen(3000, () => {
    console.log('Application started on port 3000!');
  });
};

startApp();
