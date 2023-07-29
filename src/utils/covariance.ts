import { Average } from "./average";

export const Covariance = (array1:number[], array2:number[]) => {
    if (array1.length !== array2.length) {
      throw new Error("Les tableaux doivent avoir la même taille.");
    }
  
    let total = 0;
    const meanX = Average(array1); // moyenne des entrées X
    const meanY = Average(array2); // moyenne des entrées Y
    const n = array1.length;
  
    // covariance(X, Y) = Σ[(X[i] - mean(X)) * (Y[i] - mean(Y))] / (n - 1)
    for (let index = 0; index < n; index++) {
      total += (array1[index] - meanX) * (array2[index] - meanY);
    }
  
    const covariance = total / (n - 1);
    return covariance;
}