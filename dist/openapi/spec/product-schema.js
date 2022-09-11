"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const ratings_schema_1 = require("./ratings-schema");
exports.productSchema = {
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
            ratingsSchema: ratings_schema_1.ratingsSchema,
        },
    },
};
