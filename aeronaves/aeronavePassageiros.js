import aeronaveComercial from "./aeronaveComercial.js";

export default class aeronavePassageiros extends aeronaveComercial{
    #maxPassageiros;
    
    constructor(prefixo, velocidade, autonomia, nomeCIA, maxPassageiros){
        super(prefixo, velocidade, autonomia, nomeCIA)
        this.#maxPassageiros = maxPassageiros;
    }

    get maxPassageiros(){
        return this.#maxPassageiros
    }

    toStringPassageiros(){
        return 'O número máximo de passageiros é: ' + this.#maxPassageiros + ', ';
    }
}