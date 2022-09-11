"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    if (err && err.status && err.validationErrors) {
        res.status(err.status).json({
            message: err.message,
            validation: err.validationErrors,
        });
        return;
    }
    else if (err) {
        res.status(400).json({ message: 'Bad request' });
        return;
    }
    else {
        next(err);
    }
};
exports.errorHandler = errorHandler;
