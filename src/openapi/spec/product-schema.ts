import { FromSchema } from 'json-schema-to-ts';
import { ratingsSchema } from './ratings-schema';

export const productSchema = {
  $id: '#/components/schemas/productSchema',
  type: 'object',
  required: ['description', 'title', 'price', 'image', 'category'],
  properties: {
    id: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      nullable: true,
    },
    description: {
      type: 'string',
    },
    price: {
      type: 'number',
    },
    image: {
      type: 'string',
    },
    category: {
      type: 'string',
    },
    ratings: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ratingsSchema',
      },
    },
  },
  components: {
    schemas: {
      ratingsSchema,
    },
  },
} as const;

export type productSchema = FromSchema<typeof productSchema>;
