const fn = require('./funcoes')
const path = require('path')
const { removerVazio, separarPor } = require('./funcoes')

const caminho = path.join(__dirname,'..','dados','legendas')

const simbolos = ['.', '?','-','"',',','(',')',
                    '_','<i>','</i>','\r','[',']'
                ]




fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos,'.srt'))
    .then(arquivosSRT=>fn.lerArquivos(arquivosSRT))
    .then(fn.mesclarConteudos)
    .then(fn.separarPor('\n'))
    .then(fn.removerVazio)
    .then(linhaComTexto=>fn.removerSeincluirTexto(linhaComTexto,'-->'))
    .then(fn.removerSeSomenteNumero)
    .then(fn.removerCaracteres(simbolos))
    .then(fn.mesclarConteudos)
    .then(fn.separarPor(" "))
    .then(removerVazio)
    .then(fn.removerSeSomenteNumero)
    .then(fn.agruparPalavras)
    .then(fn.ordenarporAtribNumerico('qtde', 'desc'))
    .then(console.log)