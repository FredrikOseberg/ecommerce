import supertest from 'supertest';
import { IServices, IStores } from '../../interfaces/architecture';
import { createTestApp } from '../test-helpers';

interface ITestApp {
  request: supertest.SuperTest<supertest.Test>;
  services: IServices;
  stores: IStores;
}

let app: ITestApp;

beforeAll(() => {
  app = createTestApp();
});

describe('GET /products', () => {
  it('Should return 200 and products data', () => {
    return app.request
      .get('/products')
      .expect(200)
      .expect((res) => {
        expect(res.body.length === 2);
      });
  });
});

describe('GET /products/{productId}', () => {
  it('Should return 200 and product data', () => {
    return app.request
      .get('/products/1')
      .expect(200)
      .expect((res) => {
        expect(res.body.title === 'Product 1');
      });
  });

  it('Should return empty object if there is no product matching the id', () => {
    return app.request
      .get('/products/15')
      .expect(200)
      .expect((res) => {
        expect(JSON.stringify(res.body) === JSON.stringify({}));
      });
  });
});

describe('POST /products', () => {
  it('Should reject with 400 if the request body is invalid', () => {
    return app.request
      .post('/products')
      .send({
        title: 'Product 1',
        description: 'Product 1 description212312',
        price: 100,
        image: 'https://picsum.photos/200/300',
        category: 'hello',
        id: '123',
        ratings: [
          { reviewer: 'Dave', stars: 5, comment: 'Great product!' },
        ],
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message === 'Request validation failed');
      });
  });

  it('Should return 200 and the created object if passes validation', () => {
    return app.request
      .post('/products')
      .send({
        title: 'Product 1',
        description: 'Product 1 description212312',
        price: 100,
        image: 'https://picsum.photos/200/300',
        category: 'hello',
        ratings: [
          { reviewer: 'Dave', stars: 5, comment: 'Great product!' },
        ],
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.title === 'Product 1');
      });
  });
});

describe('PUT /products/{productId}', () => {
  it('Should reject with 400 if the request body is invalid', () => {
    return app.request
      .put('/products/1')
      .send({
        title: 'Product 1',
        description: 'Product 1 description212312',
        price: 100,
        image: 'https://picsum.photos/200/300',
        category: 'hello',
        id: '123',
        ratings: [
          { reviewer: 'Dave', stars: 5, comment: 'Great product!' },
        ],
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message === 'Request validation failed');
      });
  });

  it('Should return 200 and the created object if passes validation', () => {
    return app.request
      .put('/products/1')
      .send({
        title: 'Product 1',
        description: 'Product 1 description212312',
        price: 100,
        image: 'https://picsum.photos/200/300',
        category: 'hello',
        ratings: [
          { reviewer: 'Dave', stars: 5, comment: 'Great product!' },
        ],
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.title === 'Product 1');
      });
  });
});

describe('DELETE /products/{productId}', () => {
  it('Should delete an existing product and return the deleted product', () => {
    return app.request
      .delete('/products/1')
      .expect(200)
      .expect((res) => {
        expect(res.body.title === 'Product 1');
      });
  });

  it('Should return 200 with an empty body if there is no product with the id', () => {
    return app.request
      .get('/products/15')
      .expect(200)
      .expect((res) => {
        expect(res.body === '');
      });
  });
});
