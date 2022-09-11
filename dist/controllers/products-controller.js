"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const utils_1 = require("../openapi/utils");
const base_controller_1 = require("./base-controller");
class ProductController extends base_controller_1.BaseController {
    constructor({ productService, openApiService, }) {
        super();
        this.getProducts = (req, res) => {
            const products = this.productService.getProducts();
            return res.json(products);
        };
        this.getProduct = (req, res) => {
            const product = this.productService.getProduct(req.params.productId);
            return res.json(product);
        };
        this.createProduct = (req, res) => {
            const created = this.productService.createProduct(req.body);
            return res.json(created);
        };
        this.updateProduct = (req, res) => {
            const updated = this.productService.updateProduct(req.body);
            return res.json(updated);
        };
        this.deleteProduct = (req, res) => {
            const deleted = this.productService.deleteProduct(req.params.productId);
            return res.json(deleted);
        };
        this.productService = productService;
        this.openApiService = openApiService;
        this.route({
            path: '/',
            method: 'get',
            handler: this.getProducts,
            middleware: [
                this.openApiService.validate({
                    tags: ['products'],
                    operationId: 'getProducts',
                    responses: { 200: (0, utils_1.createResponseSchema)('productsSchema') },
                }),
            ],
        });
        this.route({
            path: '/:productId',
            method: 'get',
            handler: this.getProduct,
            middleware: [
                this.openApiService.validate({
                    tags: ['products'],
                    operationId: 'getProduct',
                    responses: { 200: (0, utils_1.createResponseSchema)('productSchema') },
                }),
            ],
        });
        this.route({
            path: '/',
            method: 'post',
            handler: this.createProduct,
            middleware: [
                this.openApiService.validate({
                    tags: ['products'],
                    operationId: 'createProduct',
                    requestBody: (0, utils_1.createRequestSchema)('modifyProductSchema'),
                    responses: { 200: (0, utils_1.createResponseSchema)('productSchema') },
                }),
            ],
        });
        this.route({
            path: '/:productId',
            method: 'put',
            handler: this.updateProduct,
            middleware: [
                this.openApiService.validate({
                    tags: ['products'],
                    operationId: 'updateProduct',
                    requestBody: (0, utils_1.createRequestSchema)('modifyProductSchema'),
                    responses: { 200: (0, utils_1.createResponseSchema)('productSchema') },
                }),
            ],
        });
        this.route({
            path: '/:productId',
            method: 'delete',
            handler: this.deleteProduct,
            middleware: [
                this.openApiService.validate({
                    tags: ['products'],
                    operationId: 'deleteProduct',
                    responses: { 200: (0, utils_1.createResponseSchema)('productSchema') },
                }),
            ],
        });
    }
}
exports.ProductController = ProductController;
