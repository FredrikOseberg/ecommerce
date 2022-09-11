"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const express_1 = require("express");
const util_1 = require("../util");
class BaseController {
    constructor() {
        this.route = (options) => {
            this.router[options.method](options.path, options.middleware ? options.middleware : [], this.wrapWithErrorHandling(options.handler));
        };
        this.wrapWithErrorHandling = (handler) => {
            return (req, res) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield handler(req, res);
                }
                catch (error) {
                    const formattedError = (0, util_1.formatError)(error);
                    (0, util_1.handleErrors)(res, formattedError);
                }
            });
        };
        this.router = (0, express_1.Router)();
    }
}
exports.BaseController = BaseController;
