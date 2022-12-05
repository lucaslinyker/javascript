// g - global(encontra todas as ocorrências)
// i - insensitive (não é presa a maiúscula e minúscula)
// () - grupos
// | - ou

// const { texto } = require('./base')

const texto = 'joão trouxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela. Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente. maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa mineira que   é, nunca esquece seu famoso pão de queijo. Não canso de ouvir a Maria: "Joooooãoooooo, o café tá prontinho aqui. Veeem"!';

const regEx1 = /(maria|joão|luiz)(, hoje sua esposa)/i
const found = regEx1.exec(texto)

if (found) {
    console.log(found[0])
    console.log(found[1])
    console.log(found[2])
}
