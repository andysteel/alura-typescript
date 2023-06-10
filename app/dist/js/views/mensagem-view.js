import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-${model.criticidade}">${model.mensagem}</p>
        `;
    }
}
//# sourceMappingURL=mensagem-view.js.map