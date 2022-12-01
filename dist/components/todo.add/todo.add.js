import { Task } from '../../models/Task.js';
import { Component } from '../component/Component.js';
export class Add extends Component {
    selector;
    handleAdd;
    constructor(selector, handleAdd) {
        super();
        this.selector = selector;
        this.handleAdd = handleAdd;
        this.template = this.createTemplate();
        this.render();
    }
    render() {
        const element = super.outRender(this.selector);
        if (!element)
            return null;
        setTimeout(() => {
            document
                .querySelector('form.add')
                ?.addEventListener('submit', this.handleForm.bind(this));
        }, 100);
        return element;
    }
    handleForm(event) {
        const dataForm = {
            title: '',
            responsible: '',
        };
        event.preventDefault();
        const formElement = event.target;
        const inputs = [
            ...formElement.querySelectorAll('[type="text"]'),
            ...formElement.querySelectorAll('[type="number"]'),
            ...formElement.querySelectorAll('select'),
        ];
        [dataForm.title, dataForm.responsible] = [...inputs].map((item) => item.value);
        const newTask = new Task(dataForm.title, dataForm.responsible);
        this.handleAdd({ ...newTask });
    }
    createTemplate() {
        return `
        <section>
            <h3>Añadir tarea</h3>
            <form class="add">
                <div>
                    <label for="title">Tarea</label>
                    <input type="text" name="title" id="title" placeholder="Describe la tarea" required>
                </div>
                <div>
                    <label for="responsible">Responsable</label>
                    <input type="text" name="responsible" id="responsible" placeholder="Responsable de la tarea">
                </div>
                <div>
                    <button type='submit'>Añadir</button>
                </div>
            </form>
        </section>
        `;
    }
}
