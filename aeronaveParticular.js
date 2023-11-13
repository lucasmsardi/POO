import aeronave from "./aeronave.js";

export default class aeronaveParticular extends aeronave{
    #respManutencao;

    constructor(prefixo, velocidadeCruzeiro, autonomia, respManutencao){
        super(prefixo, velocidadeCruzeiro, autonomia)
        this.#respManutencao = respManutencao

    }

    get respManutencao(){
        return this.#respManutencao;
    }

    toString(){
        return ' O responsável pela manutenção é: ' + this.#respManutencao;
    }
}