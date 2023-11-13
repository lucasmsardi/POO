import aeronave from "./aeronave.js";
import aeronaveCarga from "./aeronaveCarga.js"
import aeronaveComercial from "./aeronaveComercial.js";
import aeronaveParticular from "./aeronaveParticular.js"
import aeronavePassageiros from "./aeronavePassageiros.js"
export default class servicoAeronaves {
    todas(){
        this.instanciaAeronaves();
         for (let i=0; i<this.arrayAeronaves.length; i++){
                console.log(this.arrayAeronaves[i].toStringPrefixo(), this.arrayAeronaves[i].toStringVelocidade(), 
                this.arrayAeronaves[i].toStringAutonomia(), `${this.arrayAeronaves[i].respManutencao ? this.arrayAeronaves[i].toString() : ''}`,
                `${this.arrayAeronaves[i].pesoMax ? this.arrayAeronaves[i].toStringPeso() : ''}`,
                `${this.arrayAeronaves[i].maxPassageiros ? this.arrayAeronaves[i].toStringPassageiros() : ''}`,
                `${this.arrayAeronaves[i].nomeCIA ? this.arrayAeronaves[i].toString() : ''}`
                )
        } 
        
    }

    instanciaAeronaves(){
        let aeronave1 = new aeronaveCarga("103", 800, 10, "LATAM", 447)
        let aeronave2 = new aeronaveParticular("104", 300, 18, "Jorge")
        let aeronave3 = new aeronavePassageiros("105", 500, 22, "TAP", 200)

        this.arrayAeronaves = [aeronave1, aeronave2, aeronave3]
    }
}