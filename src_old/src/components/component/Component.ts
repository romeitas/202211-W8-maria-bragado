export abstract class Component {
    protected template!: string;
    private element!: Element | null;

    render(selector: string) {
        const e = document.querySelector(selector);
        if (e === null) return;
        this.element = e;
        this.element.innerHTML = this.template;
    }

    renderAdd(selector: string, template: string) {
        if (!selector) return false;
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML += template;
        return true;
    }
    renderOuter(selector: string, template: string) {
        if (!selector) return false;
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.outerHTML = template;
        return true;
    }
}
