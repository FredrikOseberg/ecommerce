"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helpers_1 = require("../test-helpers");
let app;
beforeAll(() => {
    app = (0, test_helpers_1.createTestApp)();
});
describe('GET /products', () => {
    it('Should return 200 and products data', () => {
        app.request
            .get('/products')
            .expect(200)
            .expect((res) => {
            expect(res.body.length === 2);
        });
    });
});
