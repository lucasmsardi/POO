import aeronaveComercial from "./aeronaveComercial.js";

export default class aeronaveCarga extends aeronaveComercial {
    #pesoMax;

    constructor(prefixo, velocidade, autonomia, nomeCIA, pesoMax){
        super(prefixo, velocidade, autonomia, nomeCIA);
        this.#pesoMax = pesoMax;
    }

    get pesoMax(){
        return this.#pesoMax
    }

    toStringPeso(){
        return "O peso máximo é: " + this.#pesoMax + ', ';
    }
}

