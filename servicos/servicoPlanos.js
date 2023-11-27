import { planoDeVoo } from "../planoDeVoo";

class servicoPlanos {
    consiste() {

    }

    recupera() {
        
    }

    instanciaPlanos() {
        const plano1 = new planoDeVoo
        plano1.id = "125"
        plano1.matricPiloto = "123123123"
        plano1.idAerovia = "123"
        plano1.data = "2023-11-30"
        plano1.horario = "08:00:00"
        plano1.altitude = 25000
        plano1.slots = 2
        plano1.cancelado = false
        /* 
        const plano2 = new planoDeVoo
        const plano3 = new planoDeVoo */
        this.arrayPlanos = [plano1]
    }
}