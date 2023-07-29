"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predict = void 0;
const sigmoid_1 = require("../utils/sigmoid");
const Predict = (model) => {
    const x = model.x;
    const y = model.y;
    const slope = model.slope;
    const intercept = model.intercept;
    const predictions = [];
    for (let i = 0; i < x.length; i++) {
        const prediction = slope * x[i] + intercept;
        const sigmoid = (0, sigmoid_1.Sigmoid)(prediction);
        predictions.push(sigmoid);
    }
    return predictions;
};
exports.Predict = Predict;
