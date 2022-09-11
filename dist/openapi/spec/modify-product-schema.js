"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifyProductSchema = void 0;
const ratings_schema_1 = require("./ratings-schema");
exports.modifyProductSchema = {
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
            ratingsSchema: ratings_schema_1.ratingsSchema,
        },
    },
};
