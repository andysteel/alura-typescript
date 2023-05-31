import { Mensagem } from "../models/mensagem.js";
import { View } from "./view.js";

export class MensagemView extends View<Mensagem> {

    protected template(model: Mensagem): string {
        return `
            <p class="alert alert-${model.criticidade}">${model.mensagem}</p>
        `;
    }
}