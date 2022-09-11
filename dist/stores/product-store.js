"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStore = void 0;
const products = [
    {
        title: 'Product 1',
        description: 'Product 1 description',
        category: 'test',
        price: 100,
        image: 'https://picsum.photos/200/300',
        ratings: [],
        id: '1',
    },
    {
        title: 'Product 2',
        description: 'Product 2 description',
        category: 'test',
        price: 200,
        image: 'https://picsum.photos/200/300',
        ratings: [],
        id: '2',
    },
];
class ProductStore {
    constructor() {
        this.getAll = () => {
            return products;
        };
        this.getById = (productId) => {
            const product = products.find((product) => product.id === productId);
            if (product) {
                return product;
            }
            return {};
        };
        this.create = (product) => {
            products.push(product);
            return product;
        };
        this.update = (updatedProduct) => {
            const index = products.findIndex((product) => product.id === updatedProduct.id);
            if (index > -1) {
                products[index] = updatedProduct;
            }
            return updatedProduct;
        };
        this.delete = (productId) => {
            const index = products.findIndex((product) => product.id === productId);
            let deleted;
            if (index > -1) {
                deleted = products.splice(index, 1);
            }
            if (deleted) {
                return deleted[0];
            }
        };
    }
}
exports.ProductStore = ProductStore;
