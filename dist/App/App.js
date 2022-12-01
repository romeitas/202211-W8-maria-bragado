import { series } from '../series/series.js';
export class App {
    serie;
    constructor() {
        this.serie = this.CreateSeries();
    }
    CreateSeries() {
        return series;
    }
}
