import supertest from 'supertest';
import { IServices, IStores } from '../../interfaces/architecture';
import { products, ProductStore } from '../../stores/product-store';
import { createTestApp } from '../test-helpers';

interface ITestApp {
  request: supertest.SuperTest<supertest.Test>;
  services: IServices;
  stores: IStores;
}

let app: ITestApp;
let store: ProductStore;

beforeAll(() => {
  app = createTestApp();
  store = app.stores.productStore;
});

describe('Product store', () => {
  it('Should get all products', () => {
    const fetchedProducts = store.getAll();

    expect(fetchedProducts.length === products.length);
  });

  it('Should get a specific product', () => {
    const fetchedProduct = store.getById('1');
    expect(fetchedProduct.title === 'Product 1');
  });

  it('Should create a product', () => {
    const newProduct = {
      title: 'Product 3',
      description: 'Product 3 description',
      price: 100,
      image: 'https://picsum.photos/200/300',
      category: 'hello',
      ratings: [],
      id: '123',
    };

    const createdProduct = store.create(newProduct);

    expect(createdProduct.title === newProduct.title);
    expect(products.length).toBe(3);
  });

  it('should update a product', () => {
    const update = {
      title: 'Product 1',
      description: 'Product 3 description',
      price: 500,
      image: 'https://picsum.photos/200/300',
      category: 'hello',
      ratings: [],
      id: '1',
    };

    const updatedProduct = store.update(update);
    expect(updatedProduct.price).toBe(update.price);
    expect(products[0].price).toBe(update.price);
  });

  it('should delete a product', () => {
    store.delete('1');
    expect(products.length).toBe(2);
  });
});
