"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingsSchema = void 0;
exports.ratingsSchema = {
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
};
