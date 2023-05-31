var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DomInjector } from "../decorators/dom-injector.js";
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
import { CriticidadeMensagem } from "../enums/criticidade-mensagem.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Mensagem } from "../models/mensagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(new Mensagem('Apenas negociações em dias úteis são aceitas', CriticidadeMensagem.ERROR));
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.mensagemView.update(new Mensagem('Negociação adicionada com sucesso.', CriticidadeMensagem.SUCCESS));
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
    }
}
__decorate([
    DomInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    DomInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    DomInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    LogarTempoDeExecucao(true)
], NegociacaoController.prototype, "adiciona", null);
