var mostra = false
var nTab = [1, 10]
var nX = [1, 10]
var carac1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
var carac2 = ['*']
var carac3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
var res = document.getElementById('res')
var resposta = document.getElementById('resposta')
var marcas = []

function tela() { // Gambiarra pra ter mais de uma página
    if (document.getElementById('tela').value == 'Configurações') { // Está nas CONFIGURAÇÕES
        document.getElementById('tela').value = 'Tela inicial'
        document.getElementById('telaInicial').style.display = 'none' // Apaga
        document.getElementById('configurações').style.display = 'block' // Aparece

    } else { // Está na TELA INICIAL
        if (mostra == true) {
            mostrar()
            mostra = false
        }
        document.getElementById('tela').value = 'Configurações'
        document.getElementById('configurações').style.display = 'none' // Apaga
        document.getElementById('telaInicial').style.display = 'block' // Aparece
        res.focus()
    }
}

function mostrar() {
    document.getElementById('numTab').innerHTML = carac1[Math.floor(Math.random() * carac1.length)]
    document.getElementById('tabDo').innerHTML = carac2[Math.floor(Math.random() * carac2.length)]
    document.getElementById('numX').innerHTML = carac3[Math.floor(Math.random() * carac3.length)]
    res.focus()
    resposta.innerHTML = '?'
    resposta.style.color = 'yellow'
}

function enviar(v) {
    if (v.length == 0) {
        alert('Digite um número antes de enviar!')
    } else {
        var numTab = String(document.getElementById('numTab').outerText)
        var tabDo = String(document.getElementById('tabDo').outerText)
        var numX = String(document.getElementById('numX').outerText)
        var text = `${numTab} ${tabDo} ${numX}`
        if (eval(text) == v) {
            alert('ACERTOU!')
            res.value = ''
            resposta.style.color = 'green'
            resposta.innerHTML = v
            setTimeout(mostrar, 1000)
        } else {
            alert('ERROU!')
            res.value = ''
            resposta.style.color = 'red'
            resposta.innerHTML = v
            setTimeout(mostrar, 1000)
        }
    }
}

function ex() {
    var botão = document.getElementById('ex')
    if (botão.innerHTML == '?') {
        botão.innerHTML = '✖'
        document.getElementsByClassName('exemplo')[0].innerHTML = '<mark><strong>4</strong></mark> X 3 = 12'
        document.getElementsByClassName('exemplo')[1].innerHTML = '4 X <mark><strong>3</strong></mark> = 12'
        document.getElementsByClassName('exemplo')[2].innerHTML = '4 <mark><strong>X</strong></mark> 3 = 12'
    } else {
        botão.innerHTML = '?'
        var exemplo = document.getElementsByClassName('exemplo')
        for (let i = 0; i < 3; i++) {
            exemplo[i].innerHTML = ''
        }
    }
}

function savar() {
    var todos = 0
    var InTab = document.getElementById('InTab')
    var FnTab = document.getElementById('FnTab')
    var iXnTab = document.getElementById('iXnTab')
    var fXnTab = document.getElementById('fXnTab')
    marcas = [ // 0, 1, 2, 3
        document.getElementById('marca1').checked,
        document.getElementById('marca2').checked,
        document.getElementById('marca3').checked,
        document.getElementById('marca4').checked
    ]
    for (let i in marcas) {
        if (marcas[i] == false) {
            todos = todos + 1
        }
    }
    if (todos == 4 || InTab.value.length == 0 || FnTab.value.length == 0 || iXnTab.value.length == 0 || fXnTab.value.length == 0) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var comfirmar = confirm('Salvar!?')
        if (comfirmar == true) {
            // Número da Tabuada
            nTab = [ // 0 e 1
                Number(InTab.value), Number(FnTab.value)
            ]
            // Número de Vezes
            nX = [ // 0 e 1
                Number(iXnTab.value), Number(fXnTab.value)
            ]
            // X, -, + e /
            carac1.length = 0
            carac2.length = 0
            carac3.length = 0
            if (marcas[0] == true) carac2.push('*')
            if (marcas[1] == true) carac2.push('-')
            if (marcas[2] == true) carac2.push('+')
            if (marcas[3] == true) carac2.push('/')
            for (let i = nTab[0]; i <= nTab[1]; i++) {
                carac1.push(String(i))
            }
            for (let i = nX[0]; i <= nX[1]; i++) {
                carac3.push(String(i))
            }
            mostra = true
            alert('Todos os dados foram salvos!')
        } else {
            alert('Nada foi salvo!')
        }
    }
}

function padrão() {
    var comfirmar = confirm('Voltar ao padrão!?')
    if (comfirmar == true) {
        document.getElementById('InTab').value = 1
        document.getElementById('FnTab').value = 10
        document.getElementById('iXnTab').value = 1
        document.getElementById('fXnTab').value = 10
        document.getElementById('marca1').checked = true
        document.getElementById('marca2').checked = false
        document.getElementById('marca3').checked = false
        document.getElementById('marca4').checked = false
        document.getElementById('ex').innerHTML = '?'
        var exemplo = document.getElementsByClassName('exemplo')
        for (let i = 0; i < 3; i++) {
            exemplo[i].innerHTML = ''
        }
        nTab = [1, 10]
        nX = [1, 10]
        carac2 = ['*']
        mostra = true
        alert('Dados voltados ao padrão!')
    } else {
        alert('Nada voltado ao padrão!')
    }
}