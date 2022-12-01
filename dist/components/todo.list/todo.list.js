import { Component } from '../component/Component.js';
import { Add } from '../todo.add/add.js';
import { Item } from '../todo.item/item.js';
export class List extends Component {
    selector;
    tasks;
    constructor(selector) {
        super();
        this.selector = selector;
        this.tasks = initializeTasks();
        this.manageComponent();
    }
    manageComponent() {
        consoleDebug(this.tasks);
        this.template = this.createTemplate();
        this.render();
        try {
            new Add('slot[name="add"]', this.addTask.bind(this));
            this.tasks.forEach((item) => new Item('ul.slot-items', item, this.updateTask.bind(this), this.deleteTask.bind(this)));
        }
        catch (error) {
            consoleDebug(error.message);
        }
    }
    render() {
        super.cleanHtml(this.selector);
        return super.innRender(this.selector);
    }
    addTask(task) {
        // Mutando el array this.tasks.push(task)
        this.tasks = [...this.tasks, task];
        this.manageComponent();
        return this.tasks;
    }
    updateTask(id, data) {
        this.tasks = this.tasks.map((item) => item.id === id ? { ...item, ...data } : item);
        this.manageComponent();
        return this.tasks;
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((item) => item.id !== id);
        this.manageComponent();
        return this.tasks;
    }
    createTemplate() {
        return `
        <section>
            <slot name="add"></slot>
            <h3>Lita de tareas</h3>
            <ul class="slot-items"></ul>
        </section>
        `;
    }
}
