var agora = new Date()
var diaSem = agora.getDay()
// Sem == Semana.
/* 
 0 = Domingo
 1 = Segunda
 2 = Terça
 3 = Quarta
 4 = Quinta
 5 = Sexta
 6 = Sabádo 
*/
// console.log(diaSem)
switch (diaSem) { // No () não é condição q coloca, é expressão
    case 0:
        console.log('Domingo')
        break // O break é OBRIGATÓRIO, EXETO no default.
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabádo')
        break
    default: // default é opcional. Se nemnhum case for executado ele é executado.
        console.log('[ERRO] Dia inválido!')
        break // O break no default é opcional.
}