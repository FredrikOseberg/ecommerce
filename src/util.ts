import { IServices, IStores } from './interfaces/architecture';
import { ProductService } from './services/product-service';
import { ProductStore } from './stores/product-store';

export const createStores = () => {
  const productStore = new ProductStore();

  return { productStore };
};

export const createServices = (stores: IStores): IServices => {
  const { productStore } = stores;
  const productService = new ProductService({ productStore });

  return { productService };
};
