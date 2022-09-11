"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./controllers/products-controller");
const error_handlers_1 = require("./errors/error-handlers");
const util_1 = require("./util");
const createApp = (services) => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json(), error_handlers_1.errorHandler);
    app.use('/products', new products_controller_1.ProductController(services).router);
    app.use(error_handlers_1.errorHandler);
    return app;
};
exports.createApp = createApp;
const startApp = () => {
    const stores = (0, util_1.createStores)();
    const services = (0, util_1.createServices)(stores);
    const app = (0, exports.createApp)(services);
    app.listen(3000, () => {
        console.log('Application started on port 3000!');
    });
};
startApp();
