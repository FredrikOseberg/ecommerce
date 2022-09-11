import { FromSchema } from 'json-schema-to-ts';
import { productSchema } from './product-schema';

export const productsSchema = {
  $id: '#/components/schemas/productsSchema',
  type: 'array',
  items: {
    $ref: '#/components/schemas/productSchema',
  },
  components: {
    schemas: {
      productSchema,
    },
  },
} as const;

export type productsSchema = FromSchema<typeof productsSchema>;
