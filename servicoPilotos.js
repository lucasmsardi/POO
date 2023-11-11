import Piloto from "./piloto";

const piloto1 = new piloto(123, "Lucao", true);
const piloto2 = new piloto(124, "Lucas", false);
const piloto3 = new piloto(125, "Luquinha", true);

let arrayPilotos = [piloto1, piloto2, piloto3];

class servicoPilotos {
    recupera(matricula) {
        for (let i = 0; i < arrayPilotos.length; i++){
            if (arrayPilotos[i].matricula == matricula) {
                return
            }
        }
    }

    todos(){
        return arrayPilotos;
    }
}