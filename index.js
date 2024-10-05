class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque
        if(this.tipo === 'mago'){
            ataque = 'magia'
        } else if (this.tipo = 'guerreiro') {
            ataque = 'sua espada'
        } else if (this.tipo = 'monge') {
            ataque = 'artes marciais'
        } else if (this.tipo = 'ninja') {
            ataque = 'shuriken'
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

const hero1 = new Hero('Mateus', 22, 'mago');
hero1.atacar();

const hero2 = new Hero('Sarah', 24, 'guerreiro')
hero2.atacar();