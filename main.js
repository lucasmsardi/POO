import servicoAeronaves from './servicos/servicoAeronaves.js'
import servicoAerovias from './servicos/servicoAerovias.js'
import servicoPilotos from './servicos/servicoPilotos.js'

class Menu {
    listarAerovias(){ // botão 1
        servicoA.todasAerovias();
    }

    listarAltitudesLivres() {
    }

    aprovarPlanoDeVoo() {}

    listarPlanos() {}

    listarOcupacao() {}

    cancelarPlano() {}

    sair() {
        return false;
    }
}

const data = new Date("November 25, 2023 10:05:00 UTC-03:00")
const data2 = new Date("November 25, 2023 09:05:00 UTC-03:00")


if (data > data2) {
    console.log('oii')
}


const servicoP = new servicoPilotos
const servicoA = new servicoAerovias 
const servicoAN = new servicoAeronaves

const menu = new Menu()

// console.log(servicoP.recupera("123123123"))
// console.log(servicoP.recupera("124124124"))
// console.log(servicoP.recupera("125125125"))
// console.log(servicoA.recupera("POA", "FLO"))

//servicoAN.todas()

/*  while (true) {
    if (escolha == 1) {
        menu.listarAerovias()
    } else {
        menu.sair()
    }
} */ 
