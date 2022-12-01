import { series } from '../series/series';
export class App {
    serie;
    constructor() {
        this.serie = this.CreateSeries();
    }
    CreateSeries() {
        return series;
    }
}
