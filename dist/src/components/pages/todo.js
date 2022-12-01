import { Component } from '../../components/component/component.js';
import { List } from '../../components/todo.list/list.js';
import { consoleDebug } from '../../tools/debug.js';
export class TodoPage extends Component {
    selector;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.render();
        try {
            new List('.todo-wrapper');
        }
        catch (error) {
            consoleDebug(error.message);
        }
    }
    render() {
        return super.innRender(this.selector);
    }
    createTemplate() {
        return `
        <main>
            <h2>Tareas</h2>
            <div class="todo-wrapper"></div>
        </main>
        `;
    }
}
