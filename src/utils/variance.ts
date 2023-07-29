import { Average } from "./average";

export const Variance = (array:number[]) => {
    let total = 0;
    let ecart = 0;
    let meanX = Average(array);
    
    if (array.length === 0) {
      throw new Error("Le tableau est vide. Impossible de calculer la variance.");
    }
  
    for (let index = 0; index < array.length; index++) {
      ecart = (array[index] - meanX);
      total += Math.pow(ecart, 2);
    }
  
    const variance = total / (array.length - 1);
    return variance;
}