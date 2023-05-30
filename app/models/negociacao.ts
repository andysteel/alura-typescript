export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, qtdString: string, valorString: string) {
        return  new Negociacao(
            new Date(dataString.replace(/-/g,',')),
            Number(qtdString),
            Number(valorString)
        )
    }
}