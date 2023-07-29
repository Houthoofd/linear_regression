"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sigmoid = void 0;
const Sigmoid = (x) => {
    return 1 / (1 + Math.exp(-x));
};
exports.Sigmoid = Sigmoid;
