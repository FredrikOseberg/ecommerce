import { modifyProductSchema } from './spec/modify-product-schema';
import { productSchema } from './spec/product-schema';
import { productsSchema } from './spec/products-schema';
import { ratingsSchema } from './spec/ratings-schema';
import { mapValues, removeJsonSchemaProps } from './utils';

const schemas = {
  productSchema,
  productsSchema,
  ratingsSchema,
  modifyProductSchema,
};

export const createOpenApiSchema = () => {
  return {
    openapi: '3.0.3',
    servers: [{ url: 'http://localhost:3000' }],
    info: {
      title: 'ecommerce',
      version: process.env.npm_package_version!,
    },
    components: {
      schemas: mapValues(schemas, removeJsonSchemaProps),
    },
    tags: [
      {
        name: 'Products',
        description: 'Create, update, view and delete products',
      },
    ],
  };
};
