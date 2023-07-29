import * as fs from 'fs';
import { LinearRegression } from './models/LinearRegression';

(() => {

    fs.readFile('datas.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Erreur lors de la lecture du fichier:', err);
          return;
        }
        let parsed = JSON.parse(data);
        let lr = new LinearRegression(parsed);
        lr.Train();
        let predictions = lr.Predict();
        console.log(predictions);
    })

})()