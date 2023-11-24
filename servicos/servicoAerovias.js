import Aerovias from "../aerovias/aerovias.js";

export default class servicoAerovias {
    recupera(origem, destino){
        this.instaciaAerovia();
        for (let i=0; i<this.arrayAerovia.length; i++){
            if (origem == this.arrayAerovia[i].aeroportoOrigem && destino == this.arrayAerovia[i].aeroportoDestino){
                return `Essa aerovia é ${this.arrayAerovia[i].identificador}, Origem: ${this.arrayAerovia[i].aeroportoOrigem}, Destino: ${this.arrayAerovia[i].aeroportoDestino}, Distância: ${this.arrayAerovia[i].tamanhoAerovia}km`
            }
        }
    }

    instaciaAerovia(){
        let aerovia1 = new Aerovias("123", "POA", "FLO", 1000);
        let aerovia2 = new Aerovias("124", "POA", "GRU", 2500);
        let aerovia3 = new Aerovias("125", "POA", "USA", 5000);

        this.arrayAerovia = [aerovia1, aerovia2, aerovia3]
    }
    
}