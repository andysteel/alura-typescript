export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    update(model: T) {
        this.elemento.innerHTML = this.template(model);
    }
}