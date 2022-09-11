"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiService = void 0;
const openapi_1 = __importDefault(require("@wesleytodd/openapi"));
const openapi_2 = require("../openapi");
class OpenApiService {
    constructor() {
        this.api = (0, openapi_1.default)('http://localhost:3000', (0, openapi_2.createOpenApiSchema)(), {
            coerce: true,
        });
    }
    validate(operation) {
        return this.api.validPath(operation);
    }
}
exports.OpenApiService = OpenApiService;
