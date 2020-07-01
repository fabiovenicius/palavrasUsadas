const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname,'..','dados','legendas')

console.log(fn.lerDiretorio(caminho))