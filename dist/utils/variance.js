"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variance = void 0;
const average_1 = require("./average");
const Variance = (array) => {
    let total = 0;
    let ecart = 0;
    let meanX = (0, average_1.Average)(array);
    if (array.length === 0) {
        throw new Error("Le tableau est vide. Impossible de calculer la variance.");
    }
    for (let index = 0; index < array.length; index++) {
        ecart = (array[index] - meanX);
        total += Math.pow(ecart, 2);
    }
    const variance = total / (array.length - 1);
    return variance;
};
exports.Variance = Variance;
