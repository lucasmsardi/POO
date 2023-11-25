import Aerovia from "../aerovias/aerovia.js";

export default class servicoAerovias {
    recuperar(origem, destino){
        this.instaciarAerovia();
        for (let i=0; i<this.arrayAerovia.length; i++){
            if (origem == this.arrayAerovia[i].aeroportoOrigem && destino == this.arrayAerovia[i].aeroportoDestino){
                return `Essa aerovia é ${this.arrayAerovia[i].identificador}, Origem: ${this.arrayAerovia[i].aeroportoOrigem}, Destino: ${this.arrayAerovia[i].aeroportoDestino}, Distância: ${this.arrayAerovia[i].tamanhoAerovia}km`
            }
        }
    }

    instaciarAerovia(){
        let aerovia1 = new Aerovia("123", "POA", "FLO", 1000);
        let aerovia2 = new Aerovia("124", "POA", "GRU", 2500);
        let aerovia3 = new Aerovia("125", "POA", "USA", 5000);

        this.arrayAerovia = [aerovia1, aerovia2, aerovia3]
        return this.arrayAerovia
    }

    printarTodasAerovias(){
        this.instaciarAerovia()
        for (let i=0; i<this.arrayAerovia.length; i++){
           console.log(`Aerovia ${i+1}: `  + this.arrayAerovia[i].toString())
        }
    }


    
}