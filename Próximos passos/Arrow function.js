/* 
Arrow functions são sempre funções anônimas!
Elas tratam o this de maneira completamente diferente!
Pra elas não serem anônimas é preciso associar elas a uma variavel 

Não é preciso usar a palavra function
Funções com somente uma instrução o return não é necessário e também não é preciso usar {}
Quando a somente um parâmetro os () não são necessários
No caso de não haver parâmetros coloca-se o () vazio
Para casos que a mais de uma instrução é sim preciso usar as {}
Arrow functions redefinem como this é tratdo na função
Arrow functions não tem seu próprio this
*/

function sum(a, b) {
    return a + b
}
var sum = (a, b) => a + b

function isAdult(age) {
    return age > 18
}
var isAdult = age => age > 18

function getRandomNumber() {
    return Math.random()
}
var getRandomNumber = () => Math.random()

document.addEventListener('click', function() {
    console.log('clicked')
})
document.addEventListener('click', () => console.log('clicked'))

var func = function() {
    console.log(this)
}

var arrowFunc = () => console.log(this)

func()
arrowFunc()

/* (a, b) => {
    return a + b;
}
(a, b) => a + b

var a = 5
var b = 10

var c = (n1, n2) => n1 + n2
console.log(c(a, b))

var d = (x, y) => {
    var op
    if (x >= 5) {
        op = x * y
    } else {
        op = x / y
    }
    return op
}
console.log(d(a, b)) */