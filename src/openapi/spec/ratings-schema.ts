import { FromSchema } from 'json-schema-to-ts';

export const ratingsSchema = {
  $id: '#/components/schemas/ratingsSchema',
  type: 'object',
  required: ['reviewer', 'stars'],
  properties: {
    stars: {
      type: 'number',
    },
    comment: {
      type: 'string',
    },
    reviewer: {
      type: 'string',
    },
  },
  components: {},
} as const;

export type ratingsSchema = FromSchema<typeof ratingsSchema>;
