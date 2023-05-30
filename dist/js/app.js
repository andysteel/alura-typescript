import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
        form.reset();
        const inputData = form.elements[0];
        inputData.focus();
    });
}
else {
    throw Error('Erro ao inicializar a aplicação. Verifique se o form existe.');
}
