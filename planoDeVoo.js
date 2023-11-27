import servicoAerovias from "./servicos/servicoAerovias.js";
import servicoPilotos from "./servicos/servicoPilotos.js";

export class planoDeVoo {
    #id;
    #matricPiloto;
    #idAerovia;
    #data;
    #horario
    #altitude;
    #slots;
    #cancelado;

    get id() {
        return this.#id
    }

    get matricPiloto() {
        return this.#matricPiloto
    }

    get idAerovia() {
        return this.#idAerovia
    }

    get data() {
        return this.#data
    }

    get horario() {
        return this.#horario
    }

    get altitude() {
        return this.#altitude
    }

    get slots() {

    }

    get cancelado(){

    }

    /* set id() {
        
    } */

    set matricPiloto(matPiloto) {
        instanciaPiloto.recupera()
        let arrayPilotos = instanciaPiloto.todos()
        for (let i=0; i<arrayPilotos.length;i++) {
            if (matPiloto == arrayPilotos[i].matricula) {
                this.#matricPiloto = matPiloto
            }
        }
    }

    set idAerovia(idAerovia) {
        let arrayAerovia =  instanciaAerovia.instaciarAerovia()
        for (let i=0; i<arrayAerovia.length;i++) {
            if (idAerovia == arrayAerovia[i].identificador) {
                this.#idAerovia = idAerovia
            }
        }
    }

    set data(data) {
        this.#data = data
    }

    set horario(horario) {
        this.#horario = horario
    }

    set altitude(altidude) {
        this.#altitude = altitude
    }

    set slots(slots) {
        this.#slots = slots
    }

    /* set cancelado(){

    } */

}

let instanciaPiloto = new servicoPilotos
let instanciaAerovia = new servicoAerovias

// hardcodar planos de voo

let plano1 = new planoDeVoo
/* plano1.matricPiloto = "123123123"
console.log(plano1.matricPiloto) */


plano1.idAerovia = "123"
console.log(plano1.idAerovia)