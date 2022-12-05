function tabuada() {
    var n = Number(document.getElementById('n').value)
    var tab = document.getElementById('tab')
    if (document.getElementById('n').value.length == 0) {
        alert('Por favor, digite um número!')
    } else {    
        tab.innerHTML = ''
        var num = 10 // Número de até q número vai a tabuada, ex: 1 ao 10, num == 10
        for (var c = 1; c <= num; c++) {
            var op = document.createElement('option') // Para criar um elemento digite document.creatElement(''), entre crase digite o nome do elemento
            op.text = `${n} x ${c} = ${n * c}` // text de um option é o que vai estar escrito nele
            op.value = `tab${c}` // Referente ao value
            tab.appendChild(op) // O option foi criado, mas não esta no select, o sppendChild coloca o option como elemento filho do select
        }
    }
}