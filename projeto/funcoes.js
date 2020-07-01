const fs = require('fs')

const path = require('path')
const { resolve } = require('path')
const { rejects } = require('assert')

function lerDiretorio(caminho){
    return new Promise((resolve,reject)=>{
        try{
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo=>path.join(caminho,arquivo))
            resolve(arquivos)
        } catch(e){
            reject(e)
        }

    })
    
}

function elementosTerminadosCom(array, final){
    return array.filter(el=>el.endsWith(final))
}

function lerArquivo(caminho){
    return new Promise((resolve,reject)=>{
    try{
        const conteudo = fs.readFileSync(caminho, {encoding:'utf-8'})
        resolve(conteudo)
    }catch(e){
        reject(e)
    }
        
    })
}

function lerArquivos(caminhos){
    //Resolve após a resolução de todas as promises
    return Promise.all(caminhos.map(caminho=>lerArquivo(caminho)))
}

function removerVazio(array){
    return array.filter(el=>el.trim())
}

function removerSeincluirTexto(array,TextoFiltroExclusao){
    return array.filter(el=>!el.includes(TextoFiltroExclusao))
}


module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos,
    removerVazio,
    removerSeincluirTexto
}