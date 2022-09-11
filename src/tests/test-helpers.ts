import { createApp } from '../app';
import { createServices, createStores } from '../util';
import supertest from 'supertest';

export const createTestApp = () => {
  const stores = createStores();
  const services = createServices(stores);

  const app = createApp(services);

  const request = supertest.agent(app);

  return { request, stores, services };
};
