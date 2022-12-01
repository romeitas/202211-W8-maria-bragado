import { initializeTasks } from '../../../mocks/tasks.js';
import { Task } from '../../../models/task.js';
import { consoleDebug } from '../../tools/debug.js';
import { Component } from '../../component/Component.js';
import { Add } from '../../pages/todo.add/todo.add.js';
import { Item } from '../../pages/todo.item/todo.item.js';

export class List extends Component {
    tasks: Array<Task>;
    constructor(private selector: string) {
        super();
        this.tasks = initializeTasks();
        this.manageComponent();
    }

    manageComponent() {
        consoleDebug(this.tasks);
        this.template = this.createTemplate();
        this.render();
        try {
            new Add('slot[name="add"]', this.addTask.bind(this));
            this.tasks.forEach(
                (item) =>
                    new Item(
                        'ul.slot-items',
                        item,
                        this.updateTask.bind(this),
                        this.deleteTask.bind(this)
                    )
            );
        } catch (error) {
            consoleDebug((error as Error).message);
        }
    }

    render() {
        super.cleanHtml(this.selector);
        return super.innRender(this.selector);
    }

    addTask(task: Task) {
        // Mutando el array this.tasks.push(task)
        this.tasks = [...this.tasks, task];
        this.manageComponent();
        return this.tasks;
    }
    updateTask(id: string, data: Partial<Task>) {
        this.tasks = this.tasks.map((item) =>
            item.id === id ? { ...item, ...data } : item
        );
        this.manageComponent();
        return this.tasks;
    }
    deleteTask(id: string) {
        this.tasks = this.tasks.filter((item) => item.id !== id);
        this.manageComponent();
        return this.tasks;
    }

    private createTemplate() {
        return `
        <section>
            <slot name="add"></slot>
            <h3>Lita de tareas</h3>
            <ul class="slot-items"></ul>
        </section>
        `;
    }
}
