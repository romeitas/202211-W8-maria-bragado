import { series } from './mocks/series.js';
import { Component } from './component/component.js';
export class seriesPending extends Component {
    series;
    constructor() {
        super();
        this.series = [...series];
    }
    createTemplate() {
        let template = `<section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have ${series.length} series pending to watch</p>
                        <!--<p class="info">Congrats! You've watched all your series</p>-->
                        <ul class="series-list">`;
        this.series.forEach((item) => {
            if (!item.watched) {
                template += `
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
                            </li>`;
            }
        });
        template += `
            </ul>
            </section>`;
        return template;
    }
}
