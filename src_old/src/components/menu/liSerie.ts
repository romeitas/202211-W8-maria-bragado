import { SeriesType } from '../../components/types/series.js';
import { Component } from '../../components/component/Component.js';

export class LiSerie extends Component {
    constructor(private selector: string, private series: SeriesType) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        return super.outRender(this.selector);
    }

    private createTemplate() {
        const options = this.series
            .map(
                (item) => `
                <li class="serie">
                    <img
                        class="serie__poster"
                        src="${item.poster}"
                        alt="${item.name} poster"
                    />
                    <h4 class="serie__title">${item.name}</h4>
                    <p class="serie__info">${item.creator} ${item.year}</p>
                    <ul class="score">
                        <li class="score__star">
                            <i
                                class="icon--score fas fa-star"
                                title="1/5"
                            ></i>
                        </li>
                        <li class="score__star">
                            <i
                                class="icon--score fas fa-star"
                                title="2/5"
                            ></i>
                        </li>
                        <li class="score__star">
                            <i
                                class="icon--score fas fa-star"
                                title="3/5"
                            ></i>
                        </li>
                        <li class="score__star">
                            <i
                                class="icon--score fas fa-star"
                                title="4/5"
                            ></i>
                        </li>
                        <li class="score__star">
                            <i
                                class="icon--score fas fa-star"
                                title="5/5"
                            ></i>
                        </li>
                    </ul>
                    <i class="fas fa-times-circle icon--delete"></i>
                </li>
            `
            )
            .reduce((a, b) => a + b);

        return `
        <section class="series">
            <h2 class="section-title">Series list</h2>
            <section class="series-pending">
                <h3 class="subsection-title">Pending series</h3>
                <p class="info">You have ${this.series.length} series pending to watch</p>
                <ul class="series-list">
                    ${options}
                </ul>
            </section>
        </section>`;
    }
}
