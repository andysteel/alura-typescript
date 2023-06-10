import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: NegociacoesDoDia[]) => 
            dados.map(dadoDehoje => 
                new Negociacao(new Date(), dadoDehoje.vezes, dadoDehoje.montante)))
    }
    
 }