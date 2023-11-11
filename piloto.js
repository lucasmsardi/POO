export default class Piloto { 
    #matricula;
    nome;
    #habilitacaoAtiva;

    constructor(matricula, nome, habilitacaoAtiva){
        this.#matricula = matricula;
        this.nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }

    get matricula(){
        return this.#matricula;
    }

    get habilitacaoAtiva(){
        return this.#habilitacaoAtiva;
    }

    algumacoisa() {
        console.log("oi")
    }
}
