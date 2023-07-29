const fs = require('fs');

class LinearRegression{
    constructor(data){
        this.coefficent = {intercept:0,slop:0},
        this.data = data,
        this.x = this.X,
        this.y = this.Y
    }
    get X(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value.possession_home;
        })
    }
    get Y(){
        return Array.from(Object.values(this.data),(value,key)=>{
            return value.result;
        })
    }
    Average(array){
        let total = 0;
        let moyenne = 0;
        // Vérifier si le tableau est vide pour éviter une division par zéro
        if (array.length === 0) {
            throw new Error("Le tableau est vide. Impossible de calculer la moyenne.");
        }
        for(let index = 0; index < array.length; index++){
            total += array[index];
        }
        moyenne = total/array.length;
        return moyenne;
    }
    Variance(array) {
        let total = 0;
        let ecart = 0;
        let meanX = this.Average(array);
        
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
    Covariance(array1, array2) {
        if (array1.length !== array2.length) {
          throw new Error("Les tableaux doivent avoir la même taille.");
        }
      
        let total = 0;
        const meanX = this.Average(array1); // moyenne des entrées X
        const meanY = this.Average(array2); // moyenne des entrées Y
        const n = array1.length;
      
        // covariance(X, Y) = Σ[(X[i] - mean(X)) * (Y[i] - mean(Y))] / (n - 1)
        for (let index = 0; index < n; index++) {
          total += (array1[index] - meanX) * (array2[index] - meanY);
        }
      
        const covariance = total / (n - 1);
        return covariance;
      }
      
    Train(){
        // y = mx + b
        // y = étiquettes (résultat de la rencontre)
        // x = caractériqtiques (possession à domicile)
        // m = poids (coefficient de la pente)
        // b = biais (coefficient d'interception)
        const x = this.x;
        const y = this.y;

        if(x.length !== y.length){
            throw new Error("Les tableaux doivent avoir la même taille");
        }

    }
}

// Lire le contenu du fichier JSON de football
fs.readFile('datas.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier:', err);
      return;
    }
    let parsed = JSON.parse(data);
    let lr = new LinearRegression(parsed);
    let variance = lr.Variance(lr.x);
    console.log(variance);
});


  