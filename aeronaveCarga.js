import aeronaveComercial from "./aeronaveComercial.js";

export default class aeronaveCarga extends aeronaveComercial {
    #pesoMax;

    constructor(){
        super(prefixo, velocidade, nomeCIA);
        this.#pesoMax = pesoMax;
    }
}

