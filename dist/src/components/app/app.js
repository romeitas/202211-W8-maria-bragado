import { series } from '../mocks/series.js';
export class App {
    serie;
    constructor() {
        this.serie = this.CreateSeries();
    }
    CreateSeries() {
        return series;
    }
}
