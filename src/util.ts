import { IServices, IStores } from './interfaces/architecture';
import { ProductService } from './services/product-service';
import { ProductStore } from './stores/product-store';
import { Response } from 'express';
import { OpenApiService } from './services/open-api-service';

export const createStores = () => {
  const productStore = new ProductStore();

  return { productStore };
};

export const createServices = (stores: IStores): IServices => {
  const { productStore } = stores;
  const openApiService = new OpenApiService();
  const productService = new ProductService({ productStore });

  return { productService, openApiService };
};

export const formatError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message || error.toString();
  } else if (typeof error === 'string') {
    return error;
  } else {
    return 'Unknown error';
  }
};

export const handleErrors = (res: Response, error: string) => {
  console.log(error);

  res.status(500).json({ error }).end();
};
