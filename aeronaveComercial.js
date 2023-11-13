import aeronave from "./aeronave.js"

export default class aeronaveComercial extends aeronave{
    #nomeCIA;

    constructor(prefixo, velocidade,  autonomia, nomeCIA){
        super(prefixo, velocidade, autonomia);
        this.#nomeCIA = nomeCIA;
    }

    get nomeCIA(){
        return this.#nomeCIA
    }

    toString(){
        return "O nome da cia aérea é: " + this.#nomeCIA;
    }
}