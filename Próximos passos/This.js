/*
Fora de escopos locais o this sempre se refere ao objeto global Window
Em objetos o this vai se referir a instância e pode acessar suas propriedades
*/

let pessoa = {
    nome: 'Lucas',
    saudação: function () {
        return `Sr. ${this.nome}`
    },
    saudar: () => `Sr. ${pessoa.nome}`,
    erro: this.nome
}

console.log(pessoa.saudação())
console.log(pessoa.saudar())
console.log(pessoa.erro())