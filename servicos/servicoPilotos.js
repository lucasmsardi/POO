import piloto from "../pilotos/piloto.js";

export default class servicoPilotos {
    recupera(matricula) {
        this.instaciaPiloto();
        for (let i=0; i<this.arrayPilotos.length; i++) {
            if (matricula == this.arrayPilotos[i].matricula) {
                return `A matricula ${matricula} é do piloto: ${this.arrayPilotos[i].nome}. Está apto a voar: ${this.arrayPilotos[i].habilitacaoAtiva ? 'Sim' : 'Não'}`;   
            } 
          
        }
    }

    todos(){
        return this.arrayPilotos;
    }

    instaciaPiloto(){
        const piloto1 = new piloto("123123123", "Messi", true);
        const piloto2 = new piloto("124124124", "Neymar", false);
        const piloto3 = new piloto("125125125", "Mbappe", true);
        
       this.arrayPilotos = [piloto1, piloto2, piloto3];
    }
}