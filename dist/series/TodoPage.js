import { Component } from '../components/Component.js';
//import { List } from '../../components/todo.list/list.js';
export class TodoPage extends Component {
    selector;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.render();
    }
    render() {
        return super.innRender(this.selector);
    }
    createTemplate() {
        return `testesteste`;
    }
}
