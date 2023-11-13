export default class aeronave {
    #prefixo;
    #velocidadeCruzeiro;
    #autonomia;

    constructor(prefixo, velocidadeCruzeiro, autonomia){
        this.#prefixo = prefixo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
    }

    get prefixo(){
        return this.#prefixo;
    }

    get velocidadeCruzeiro(){
        return this.#velocidadeCruzeiro
    }

    get autonomia(){
        return this.#autonomia;
    }

    toStringPrefixo(){
        return 'O prefixo é: ' + this.#prefixo + ', ';
    }

    toStringVelocidade(){
        return 'A velocidade de cruzeiro é: ' + this.#velocidadeCruzeiro + ', ';
    }

    toStringAutonomia(){
        return 'A autonomia da aeronave é: ' + this.#autonomia + ', ';
    }
}