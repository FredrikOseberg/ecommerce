"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestApp = void 0;
const server_1 = require("../server");
const util_1 = require("../util");
const supertest_1 = __importDefault(require("supertest"));
const createTestApp = () => {
    const stores = (0, util_1.createStores)();
    const services = (0, util_1.createServices)(stores);
    const app = (0, server_1.createApp)(services);
    const request = supertest_1.default.agent(app);
    return { request, stores, services };
};
exports.createTestApp = createTestApp;
