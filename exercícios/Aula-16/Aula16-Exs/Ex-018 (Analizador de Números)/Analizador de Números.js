var result = document.getElementById('result')
var finalizar = document.getElementById('finalizar')
var res = document.getElementById('res')
var adicionados = []
var num = document.getElementById('v')
num.focus()
function adicionar() {
    var n = Number(document.getElementById('v').value)
    if (n < 1 || n > 100 || adicionados.indexOf(n) != -1) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        res.innerHTML = ''
        var op = document.createElement('option')
        op.text = `Valor ${n} adicionado.`
        op.value = `op${n}`
        result.appendChild(op)
        adicionados.push(n)
    }
    num.value = ''
    num.focus() // É a mesma coisa de vc ter clicado la no input
}
function finish() {
    if (adicionados.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var soma = 0
        var maior = adicionados[0]
        var menor = adicionados[0]
        for (var pos in adicionados) {
            soma += adicionados[pos]
            if (adicionados[pos] > maior) maior = adicionados[pos]
            if (adicionados[pos] < menor) menor = adicionados[pos]
        }
        var méia = soma / adicionados.length
        res.innerHTML = `<p>Ao todo, temos ${adicionados.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`   
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `A média dos valores digitados é ${méia.toFixed(1)}.`
    }
}