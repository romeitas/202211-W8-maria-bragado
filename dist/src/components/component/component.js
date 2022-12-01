export class Component {
    template;
    element;
    render(selector) {
        const e = document.querySelector(selector);
        if (e === null)
            return;
        this.element = e;
        this.element.innerHTML = this.template;
    }
    renderAdd(selector, template) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML += template;
        return true;
    }
    renderOuter(selector, template) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.outerHTML = template;
        return true;
    }
}
