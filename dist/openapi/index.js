"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOpenApiSchema = void 0;
const modify_product_schema_1 = require("./spec/modify-product-schema");
const product_schema_1 = require("./spec/product-schema");
const products_schema_1 = require("./spec/products-schema");
const ratings_schema_1 = require("./spec/ratings-schema");
const utils_1 = require("./utils");
const schemas = {
    productSchema: product_schema_1.productSchema,
    productsSchema: products_schema_1.productsSchema,
    ratingsSchema: ratings_schema_1.ratingsSchema,
    modifyProductSchema: modify_product_schema_1.modifyProductSchema,
};
const createOpenApiSchema = () => {
    return {
        openapi: '3.0.3',
        servers: [{ url: 'http://localhost:3000' }],
        info: {
            title: 'ecommerce',
            version: process.env.npm_package_version,
        },
        components: {
            schemas: (0, utils_1.mapValues)(schemas, utils_1.removeJsonSchemaProps),
        },
        tags: [
            {
                name: 'Products',
                description: 'Create, update, view and delete products',
            },
        ],
    };
};
exports.createOpenApiSchema = createOpenApiSchema;
