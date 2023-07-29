"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
const LinearRegression_1 = require("../models/LinearRegression");
const utils_1 = require("../utils");
const trainLineraRegression = (model) => {
    const x = model.x;
    const y = model.y;
    // calcul de la covariance de x et y //
    let covariance = (0, utils_1.Covariance)(x, y);
    // calcul de la variance de x //
    let varianceX = (0, utils_1.Variance)(x);
    // calcul du coefficient de la pente (m) //
    const slope = covariance / varianceX;
    // calcul du coefficient d'interception(b) //
    const meanX = model.Average(x);
    const meanY = model.Average(y);
    const intercept = meanY - slope * meanX;
    model.intercept = intercept;
    model.slope = slope;
};
// Entrainement utilisable à tout les modèle d'apprentissage
const Train = (model) => {
    // y = mx + b
    // y = étiquettes (résultat de la rencontre)
    // x = caractériqtiques (possession à domicile)
    // m = poids (coefficient de la pente)
    // b = biais (coefficient d'interception)
    if (model instanceof LinearRegression_1.LinearRegression) {
        return trainLineraRegression(model);
    }
};
exports.Train = Train;
