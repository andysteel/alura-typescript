import { DomInjector } from "../decorators/dom-injector.js";
import { LogarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";
import { CriticidadeMensagem } from "../enums/criticidade-mensagem.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Mensagem } from "../models/mensagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    @DomInjector('#data')
    private inputData: HTMLInputElement;
    @DomInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @DomInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    // @Inspect()
    @LogarTempoDeExecucao(true)
    adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(new Mensagem('Apenas negociações em dias úteis são aceitas',CriticidadeMensagem.ERROR));
            return;
        }
  
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.atualizaView();
        this.mensagemView.update(new Mensagem('Negociação adicionada com sucesso.', CriticidadeMensagem.SUCCESS));

    }

    public importarDados(): void {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacaoDeHoje => {
                    return !this
                        .negociacoes
                        .lista()
                        .some(negociacao => negociacao.ehIgual(negociacaoDeHoje));
                });
            })
            .then(negociacoesDeHoje => {                
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.atualizaView();
            })
            .catch(error => { throw Error(error); });
            
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
    }
}