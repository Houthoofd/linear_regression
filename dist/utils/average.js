"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Average = void 0;
const Average = (array) => {
    let total = 0;
    let moyenne = 0;
    // Vérifier si le tableau est vide pour éviter une division par zéro
    if (array.length === 0) {
        throw new Error("Le tableau est vide. Impossible de calculer la moyenne.");
    }
    for (let index = 0; index < array.length; index++) {
        total += array[index];
    }
    moyenne = total / array.length;
    return moyenne;
};
exports.Average = Average;
