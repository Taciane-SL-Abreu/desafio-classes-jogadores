//Desafio DIO Classes de um jogo
class cadastroHerio{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
    propriedades(){
        console.log(`O ${heroi.tipo} atacou usando ${heroi.ataque}`)
    }
}

let heroi = new cadastroHerio("Link", "21", "guerreiro")

if (heroi.tipo === "guerreiro") {
    heroi.ataque = "espada";  
} else if(heroi.tipo === "mago"){
    heroi.ataque = "magia";
} else if(heroi.tipo === "monge"){
    heroi.ataque = "artes marcia"
} else if(heroi.tipo === "ninja"){
    heroi.ataque = "shuriken"
}

heroi.propriedades()