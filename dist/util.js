"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.formatError = exports.createServices = exports.createStores = void 0;
const product_service_1 = require("./services/product-service");
const product_store_1 = require("./stores/product-store");
const open_api_service_1 = require("./services/open-api-service");
const createStores = () => {
    const productStore = new product_store_1.ProductStore();
    return { productStore };
};
exports.createStores = createStores;
const createServices = (stores) => {
    const { productStore } = stores;
    const openApiService = new open_api_service_1.OpenApiService();
    const productService = new product_service_1.ProductService({ productStore });
    return { productService, openApiService };
};
exports.createServices = createServices;
const formatError = (error) => {
    if (error instanceof Error) {
        return error.message || error.toString();
    }
    else if (typeof error === 'string') {
        return error;
    }
    else {
        return 'Unknown error';
    }
};
exports.formatError = formatError;
const handleErrors = (res, error) => {
    console.log(error);
    res.status(500).json({ error }).end();
};
exports.handleErrors = handleErrors;
