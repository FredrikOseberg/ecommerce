"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsSchema = void 0;
const product_schema_1 = require("./product-schema");
exports.productsSchema = {
    $id: '#/components/schemas/productsSchema',
    type: 'array',
    items: {
        $ref: '#/components/schemas/productSchema',
    },
    components: {
        schemas: {
            productSchema: product_schema_1.productSchema,
        },
    },
};
