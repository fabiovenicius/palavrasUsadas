const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname,'..','dados','legendas')

fn.lerDiretorio(caminho)
    //.then
    .then(console.log)