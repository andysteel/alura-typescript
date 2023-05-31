import { CriticidadeMensagem } from "../enums/criticidade-mensagem";

export class Mensagem {

    constructor(
        public mensagem: string,
        public criticidade: CriticidadeMensagem) {}
}