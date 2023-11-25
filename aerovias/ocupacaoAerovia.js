import Aerovia from "./aerovia.js";
import servicoAerovias from "../servicos/servicoAerovias.js";

class ocupacaoAerovia {
    altitudesOcupadas(idAerovia) {
        let servico = new servicoAerovias;
        let todasAerovias = servico.instaciarAerovia()
        for (let i = 0; i < todasAerovias.length; i++) {
            if (idAerovia == todasAerovias[i].identificador) {
                console.log("Achou")
            } else {
                console.log('Não achou')
                
            }
        }

    }
}


let ocupintaoAerovia = new ocupacaoAerovia();
ocupintaoAerovia.altitudesOcupadas("126")