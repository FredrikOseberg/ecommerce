"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor({ productStore }) {
        this.getProducts = () => {
            return this.productStore.getAll();
        };
        this.getProduct = (productId) => {
            return this.productStore.getById(productId);
        };
        this.createProduct = (product) => {
            return this.productStore.create(product);
        };
        this.updateProduct = (updatedProduct) => {
            return this.productStore.update(updatedProduct);
        };
        this.deleteProduct = (productId) => {
            return this.productStore.delete(productId);
        };
        this.productStore = productStore;
    }
}
exports.ProductService = ProductService;
