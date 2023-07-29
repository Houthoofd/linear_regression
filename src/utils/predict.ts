import { LinearRegression } from "../models/LinearRegression";
import { Sigmoid } from "../utils/sigmoid";

export const Predict = ( model:LinearRegression ):number[] => {
    const x = model.x
    const y = model.y
    const slope = model.slope;
    const intercept = model.intercept;

    const predictions: number[] = [];

    for (let i = 0; i < x.length; i++) {
      const prediction = slope * x[i] + intercept;
      const sigmoid = Sigmoid(prediction);
      predictions.push(sigmoid);
    }
    return predictions;
}