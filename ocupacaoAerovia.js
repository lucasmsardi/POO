import Aerovia from "./aerovias/aerovia.js";
import servicoAerovias from "./servicos/servicoAerovias.js";
import prompt from "prompt";

class ocupacaoAerovia {
    altitudesOcupadas(idAerovia, dataInput) {
        let servico = new servicoAerovias;
        let todasAerovias = servico.instaciarAerovia()
    }

    slotsOcupados(idAerovia) {
        for (let i = 0; i < todasAerovias.length; i++) {
            if (idAerovia == todasAerovias[i].identificador) {
                if (this.dataCorreta(dataInput, todasAerovias[i].dataComeco, todasAerovias[i].dataFim)) {
                    console.log("Achou")
                } else {
                    console.log("Não foi encontrado")
                }
            } else {
                console.log('Não achou')
            }
        }

    }

    ocupa(idAerovia) {

    }

    libera(idAerovia) {

    }

    isOcupado(idAerovia) {

    }

    dataCorreta(dataComeco, dataFim) {
        let dataPrimeira = new Date(dataComeco);
        let dataSegunda = new Date(dataFim);

        return dataInput >= comecoData && dataInput <= dataFim; 
    }
   
}

prompt.start();
prompt.get(['id','dataComeco', 'dataFim'], function (err, result) {
    console.log('  username: ' + result.id);
    console.log('  email: ' + result.dataComeco);
    console.log('  email: ' + result.dataFim);
  });

//ocupAerovia.altitudesOcupadas("126", dataInput);

