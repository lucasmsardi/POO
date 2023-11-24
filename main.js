import servicoAeronaves from './servicos/servicoAeronaves.js'
import servicoAerovias from './servicos/servicoAerovias.js'
import servicoPilotos from './servicos/servicoPilotos.js'

const servicoP = new servicoPilotos
const servicoA = new servicoAerovias 
const servicoAN = new servicoAeronaves

console.log(servicoP.recupera("123123123"))
console.log(servicoP.recupera("124124124"))
console.log(servicoP.recupera("125125125"))
console.log(servicoA.recupera("POA", "FLO"))

servicoAN.todas()
