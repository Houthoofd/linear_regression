"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearRegression = void 0;
const utils_1 = require("../utils");
class LinearRegression {
    constructor(data) {
        this.intercept = 0;
        this.slope = 0;
        this.Average = utils_1.Average;
        this.Variance = utils_1.Variance;
        this.Covariance = utils_1.Covariance;
        this.Sigmoid = () => { return (0, utils_1.Sigmoid)(this); };
        this.Train = () => { return (0, utils_1.Train)(this); };
        this.Predict = () => { return (0, utils_1.Predict)(this); };
        this.data = data;
    }
    get x() {
        return Array.from(Object.values(this.data), (value, key) => {
            return value["possession_home"];
        });
    }
    get y() {
        return Array.from(Object.values(this.data), (value, key) => {
            return value["result"];
        });
    }
}
exports.LinearRegression = LinearRegression;
