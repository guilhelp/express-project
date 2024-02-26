// Criando um servidor em express com node.js

const express = require("express")
const app = express()

// function de callback
// req = requisição
// res = resposta

app.get("/", function(req, res){
    res.end("SEJA BEM VINDO AO NODE.JS")
})

app.get("/cadastrar/:nome/:profissao/:idade", function(req, res) {
    res.end("O " + req.params.nome + " trabalha como " + req.params.profissao + " e tem " + req.params.idade + " anos.")
})

app.get("/atualizar", function(req, res){
    res.end("PÁGINA DE ATUALIZAR")
})

app.listen(8081, function(){
    console.log('Servidor rodando na porta 8081')
})