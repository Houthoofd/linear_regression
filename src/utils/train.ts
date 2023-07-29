import { LinearRegression } from "../models/LinearRegression";
import { Covariance, Variance } from "../utils";

const trainLineraRegression = ( model:LinearRegression ):void => {

    const x = model.x;
    const y = model.y;

    // calcul de la covariance de x et y //
    let covariance = Covariance(x,y);

    // calcul de la variance de x //
    let varianceX = Variance(x);

    // calcul du coefficient de la pente (m) //
    const slope = covariance / varianceX;
    
    // calcul du coefficient d'interception(b) //
    const meanX = model.Average(x);
    const meanY = model.Average(y);
    const intercept = meanY - slope * meanX;

    model.intercept = intercept;
    model.slope = slope;
}


// Entrainement utilisable à tout les modèle d'apprentissage
export const Train = ( model:LinearRegression ):void => {
    // y = mx + b
    // y = étiquettes (résultat de la rencontre)
    // x = caractériqtiques (possession à domicile)
    // m = poids (coefficient de la pente)
    // b = biais (coefficient d'interception)

    if(model instanceof LinearRegression){
        return trainLineraRegression( model );
    }
}