import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector<HTMLFormElement>('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
    form.reset()
    const inputData = form.elements[0] as HTMLInputElement;
    inputData.focus();
})