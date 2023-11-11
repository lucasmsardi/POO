class aeronaveComercial extends aeronave{
    nomeCIA;

    constructor(){
        super(prefixo, velocidade, nomeCIA);
        this.nomeCIA = nomeCIA;
    }
}