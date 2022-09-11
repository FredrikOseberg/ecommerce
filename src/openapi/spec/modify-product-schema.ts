import { FromSchema } from 'json-schema-to-ts';
import { ratingsSchema } from './ratings-schema';

export const modifyProductSchema = {
  $id: '#/components/schemas/modifyProductSchema',
  type: 'object',
  additionalProperties: false,
  required: ['description', 'title', 'price', 'image', 'category'],
  properties: {
    title: {
      type: 'string',
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

export type modifyProductSchema = FromSchema<typeof modifyProductSchema>;
