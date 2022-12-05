function carregar() {
    var tempo = document.getElementById('tempo')
    var data = document.getElementById('data')
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var date = new Date()
    var tempos = [date.getHours(), date.getMinutes(), date.getSeconds()]
    var datas = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
    tempo.innerHTML = `Tempo: ${tempos[0]}:${tempos[1]}:${tempos[2]}`
    data.innerHTML = `Data: ${datas[0]}/${datas[1]}/${datas[2]}`
    if (tempos[0] >= 0 && tempos[0] < 12) {
        msg.innerHTML = '<strong>Bom dia!</strong>Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = 'lightblue'
    } else if (tempos[0] <= 18) {
        msg.innerHTML = '<strong>Boa tarde!</strong>'
        img.src = 'tarde.png'
        document.body.style.background = 'darkorange'
    } else {
        msg.innerHTML = '<strong>Boa noite!</strong>'
        img.src = 'noite.png'
        document.body.style.background = 'darkblue'
    }
}