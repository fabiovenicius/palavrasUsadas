const fn = require('./funcoes')
const path = require('path')

const caminho = path.join(__dirname,'..','dados','legendas')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos,'.srt'))
    .then(arquivosSRT=>fn.lerArquivos(arquivosSRT))
    .then(conteudo=>conteudo.join('\n'))
    .then(todoConteudo=>todoConteudo.split('\n'))
    .then(linhas => fn.removerVazio(linhas))
    .then(linhaComTexto=>fn.removerSeincluirTexto(linhaComTexto,'-->'))
    .then(linhaComNumero=>fn.removerSeSomenteNumero(linhaComNumero))
    .then(console.log)