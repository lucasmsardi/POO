import servicoAeronaves from './servicos/servicoAeronaves.js'
import servicoAerovias from './servicos/servicoAerovias.js'
import servicoPilotos from './servicos/servicoPilotos.js'
import prompt from 'prompt-sync';

class Menu {
    listarAerovias(){ 
        servicoA.printarTodasAerovias();
    }

    listarAltitudesLivres(idAerovia, data) { 
        ocupacaoAerovia.altitudesOcupadas(idAerovia, data);
    }

    aprovarPlanoDeVoo() {}

    listarPlanos() {}

    listarOcupacao() {}

    cancelarPlano() {}

    sair() {
        return false;
    }

    exibirMenu() {
        let opcao;
        const input = prompt();

        do {
            console.log("\n=========== Menu ===========");
            console.log("1. Listar Aerovias");
            console.log("2. Listar Altitudes Livres");
            console.log("3. Aprovar Plano de Voo");
            console.log("4. Listar Planos");
            console.log("5. Listar Ocupação");
            console.log("6. Cancelar Plano");
            console.log("7. Sair");
    
            opcao = input("Escolha uma opção (1-7): ");
    
            switch (opcao) {
                case "1":
                    this.listarAerovias();
                    break;
                case "2":
                    let idAeroviaMenu = input("Digite o id da aerovia: ")
                    let dataMenu = input("Insira a data: ")
                    this.listarAltitudesLivres();
                    break;
                case "3":
                    this.aprovarPlanoDeVoo();
                    break;
                case "4":
                    this.listarPlanos();
                    break;
                case "5":
                    this.listarOcupacao();
                    break;
                case "6":
                    this.cancelarPlano();
                    break;
                case "7":
                    this.sair();
                    break;
                default:
                    console.log("Opção inválida. Digite um número de 1 a 7.");
            }
        } while (opcao !== "7");
    }

}

const servicoA = new servicoAerovias;

const menu = new Menu();
menu.exibirMenu();