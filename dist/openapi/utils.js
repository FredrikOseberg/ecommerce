"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestSchema = exports.createResponseSchema = exports.mapValues = exports.removeJsonSchemaProps = void 0;
// Omits keys from json schema that will cause errors in openapi
const removeJsonSchemaProps = (schema) => {
    return omitKeys(schema, '$id', 'components');
};
exports.removeJsonSchemaProps = removeJsonSchemaProps;
const omitKeys = (obj, ...keys) => {
    const copy = Object.assign({}, obj);
    for (const key of keys) {
        delete copy[key];
    }
    return copy;
};
const mapValues = (object, fn) => {
    const entries = Object.entries(object).map(([key, value]) => [
        key,
        fn(value),
    ]);
    return Object.fromEntries(entries);
};
exports.mapValues = mapValues;
const createResponseSchema = (schemaName) => {
    return {
        description: schemaName,
        content: {
            'application/json': {
                schema: {
                    $ref: `#/components/schemas/${schemaName}`,
                },
            },
        },
    };
};
exports.createResponseSchema = createResponseSchema;
const createRequestSchema = (schemaName) => {
    return {
        description: schemaName,
        required: true,
        content: {
            'application/json': {
                schema: {
                    $ref: `#/components/schemas/${schemaName}`,
                },
            },
        },
    };
};
exports.createRequestSchema = createRequestSchema;
