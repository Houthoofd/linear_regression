import { DataType } from "./datas";

import { Average , Variance , Train, Covariance, Predict, Sigmoid } from "../utils";

interface ILinearRegression{
    /** looool */
    intercept:number;
}

export class LinearRegression implements ILinearRegression{

    intercept: number = 0;
    slope:number = 0;
    data:DataType;

    constructor(data:DataType){
        this.data = data;
    }
    get x(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value["possession_home"];
        })
    }
    get y(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value["result"];
        })
    }
    Average = Average;
    Variance = Variance;
    Covariance = Covariance;
    Sigmoid = () => { return Sigmoid(this) };
    Train = () => { return Train(this) };
    Predict = () => { return Predict(this) };
}