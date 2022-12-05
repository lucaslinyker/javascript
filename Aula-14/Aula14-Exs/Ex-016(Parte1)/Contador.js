function contar() {
    let res = document.getElementById('res')
    if (document.getElementById('I').value.length == 0 || document.getElementById('F').value.length == 0 || document.getElementById('P').value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let IniFimPasso = [Number(document.getElementById('I').value), Number(document.getElementById('F').value), Number(document.getElementById('P').value)]
        // Início == 0, Fim == 1, Passo == 2.
        if (IniFimPasso[2] <= 0) {
            alert('Passo inváido! Considerando Passo como 1!')
            IniFimPasso[2] = 1
        }
        if (IniFimPasso[0] <= IniFimPasso[1]) {
            // Crescente
            for (let c = IniFimPasso[0]; c <= IniFimPasso[1]; c += IniFimPasso[2]) {
                // Para colocar emoji, pesquise no Google: unicode emoji list
                res.innerHTML += ` ${c} 👉 `
            }
        } else if(IniFimPasso[0] > IniFimPasso[1]) {
            // Decrescente
            for (let c = IniFimPasso[0]; c >= IniFimPasso[1]; c -= IniFimPasso[2]) {
                // Digite \u{}, e coloque o  código do emoji dentro do bloco ({})
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}