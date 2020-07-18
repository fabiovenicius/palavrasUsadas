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

function elementosTerminadosCom(array,final){
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

function removerSeSomenteNumero(array){
    return array.filter(el=>{
        const num = parseInt(el.trim())
        return num!==num
    })
}

function removerCaracteres(simbolos){
    return function(array){
        return array.map(el=>{
            let textSemSimbolos = el
            simbolos.forEach(simbolo =>{
                textSemSimbolos = textSemSimbolos.split(simbolo).join('')
            })
            return textSemSimbolos
        })
    }
}

function mesclarConteudos (array){
    return array.join(' ')
}

function separarPor(simbolo){
    return function(texto){
        return texto.split(simbolo)
    }
}

function agruparPalavras(palavras){
    return Object.values(palavras.reduce((agrupamento,palavra) => {
        const p = palavra.toLowerCase()
        const qtde = agrupamento[p] ? agrupamento[p].qtde + 1 : 1
        agrupamento[p] = { elemento: p, qtde}
        return agrupamento
    },{}))
}

function ordenarporAtribNumerico(attr, ordem = 'asc'){
    return function (array){
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos,
    removerVazio,
    removerSeincluirTexto,
    removerSeSomenteNumero,
    removerCaracteres,
    mesclarConteudos,
    separarPor,
    agruparPalavras,
    ordenarporAtribNumerico
}