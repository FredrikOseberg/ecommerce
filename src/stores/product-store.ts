import { IProduct } from '../interfaces/product';

const products: IProduct[] = [
  {
    title: 'Product 1',
    description: 'Product 1 description',
    category: 'test',
    price: 100,
    image: 'https://picsum.photos/200/300',
    ratings: [],
    id: '1',
  },
  {
    title: 'Product 2',
    description: 'Product 2 description',
    category: 'test',
    price: 200,
    image: 'https://picsum.photos/200/300',
    ratings: [],
    id: '2',
  },
];

export class ProductStore {
  getAll = (): IProduct[] => {
    return products;
  };

  getById = (productId: string) => {
    const product = products.find((product) => product.id === productId);

    if (product) {
      return product;
    }

    return {};
  };

  create = (product: IProduct) => {
    products.push(product);

    return product;
  };

  update = (updatedProduct: IProduct) => {
    const index = products.findIndex(
      (product) => product.id === updatedProduct.id
    );

    if (index > -1) {
      products[index] = updatedProduct;
    }

    return updatedProduct;
  };

  delete = (productId: string) => {
    const index = products.findIndex(
      (product) => product.id === productId
    );

    let deleted;
    if (index > -1) {
      deleted = products.splice(index, 1);
    }

    if (deleted) {
      return deleted[0];
    }
  };
}
