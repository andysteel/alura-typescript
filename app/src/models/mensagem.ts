import { CriticidadeMensagem } from "../enums/criticidade-mensagem";
import { Modelo } from "../interfaces/modelo";

export class Mensagem implements Modelo<Mensagem> {

    constructor(
        public mensagem: string,
        public criticidade: CriticidadeMensagem) {}

    paraTexto(): string {
        return `mensagem: ${this.mensagem}, criticidade: ${this.criticidade}`
    }
    
    ehIgual(mensagem: Mensagem): boolean {
        return JSON.stringify(this) === JSON.stringify(mensagem);
    }
}