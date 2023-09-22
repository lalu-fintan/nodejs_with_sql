"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFound = void 0;
//not found
const notFound = (req, res, next) => {
    const error = new Error(`not found:${req.originalUrl}`);
    res.status(404);
    next(error);
};
exports.notFound = notFound;
//Error Handler
const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode);
    res.json({
        status: "fail",
        message: err === null || err === void 0 ? void 0 : err.message,
        stack: err === null || err === void 0 ? void 0 : err.stack,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map