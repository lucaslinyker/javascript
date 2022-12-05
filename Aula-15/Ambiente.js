var num = [5, 8, 2, 9, 3] // Os elementos são separrados por vírgula (,)
num.shift() // Remove o primeiro elemento do array
num.pop() // Remove o ultimo elemento do array
num.splice(0, 1) // Remove um ou + elementos pelo índice. O array original é sempre alterado
// O segundo número define o número de itens a se remover, a partir do primeiro número em direção ao fim do array.
num.unshift(0) // Cria o q está dentro do parentêses com o valor, a chave e o elemento no início
num.push(1) // Cria o q está dentro do parentêses com o valor, a chave e o elemento no final
num.sort() // Coloca todos os elementos em ordem crescente
var número = num.slice() // Copia o array
número = número.join(' + ') // Cria e retorna uma nova string concatenando todos os elementos em um array, separados por vírgulas ou uma string separadora especificada
console.log(num)
console.log(número)
console.log(Object.keys(num)) // Retorna o índice no lugar do valor
console.log(`O vetor tem ${num.length} posições`) // length mostra o comprimento
num.length = 10 // Pode aumentar o valor de length, mas se diminuir apagará elementos
console.log(`O vetor tem "${num.length}" posições`) // length mostra o comprimento
console.log(`O primeiro valor do vetor é ${num[0]}`) // Oque está dentro de colchetes ([]) indica o índice ou a posição
let pos = num.indexOf(8) // Retorna o índice que está o valor
if (pos == -1) { // Se o valor não existir retornará -1
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}