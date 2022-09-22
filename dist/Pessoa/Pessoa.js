"use strict";
// // classe é um conjunto de atributos e metodos.
// // atributos armazenam
// //metodo executa
Object.defineProperty(exports, "__esModule", { value: true });
// class Pessoa {
//      // váriaveis
//     //ATRIBUTOS - ARMAZENAM INFORMAÇÕES
//     nome: string;
//     idade: number;
//      //  função.
//     //MÉTODO - EXECUTAM AÇÕES
//     constructor (parametroNome: string, parametroIdade: number){
//         this.nome = parametroNome;
//         this.idade = parametroIdade;
//         console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando.`)
//     }
// }
// export default Pessoa;
// // orientação a objetos é uma estilo de programaçãp
// //e primeiro criamos a classe
// // quando criamos um atributo, ou inicialzamos seu valor
// // ou define um metodo construtor.
// //quem é todo mundo?
// // primeiro lugar: a propria classe
// //segundo lugar: a classe estendida
// //terceiro lugar: o objeto
// // encapsulamento - modificadores de acesso.
//     //public - acessível por todos
//     //protected - acessível apenas dentro da classe e das classes filhas
//     //private - acessível apenas dentro da classe
//     //static - Não precisa instanciar a classe para acessar o método ou propriedade
class Pessoa {
    // encapsulamento - modificadores de acesso.
    //public - acessível por todos
    //protected - acessível apenas dentro da classe e das classes filhas
    //private - acessível apenas dentro da classe
    //static - Não precisa instanciar a classe para acessar o método ou propriedade
    nome;
    idade;
    constructor(parametroNome, parametroIdade) {
        this.nome = parametroNome;
        this.idade = parametroIdade;
        console.log(`A pessoa ${this.nome} de idade ${this.idade} está andando`);
    }
}
exports.default = Pessoa;
