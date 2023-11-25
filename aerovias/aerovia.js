export default class Aerovia {
    #identificador;
    #aeroportoOrigem;
    #aeroportoDestino;
    #tamanhoAerovia

    constructor(identificador, aeroportoOrigem, aeroportoDestino, tamanhoAerovia) {
        this.#identificador = identificador;
        this.#aeroportoOrigem = aeroportoOrigem;
        this.#aeroportoDestino = aeroportoDestino;
        this.#tamanhoAerovia = tamanhoAerovia;
    }

    get identificador(){
        return this.#identificador;
    }

    get aeroportoOrigem(){
        return this.#aeroportoOrigem;
    }

    get aeroportoDestino(){
        return this.#aeroportoDestino;
    }

    get tamanhoAerovia(){
        return this.#tamanhoAerovia;
    }

    toString() {
        return this.identificador + ', ' + this.aeroportoOrigem + ', ' + this.aeroportoDestino + ', ' + this.tamanhoAerovia
    }
}