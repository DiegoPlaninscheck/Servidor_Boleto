const express = require('express')
const router = express.Router();
const funcoesBoleto = require('./function/fuctionBoleto');
const funcoesUsuario = require("./function/fuctionUsuario")
const funcoesPessoa = require('./function/functionPessoa');

//terminar get by pessoa

router.get("/", (req, res) => {
    res.json(funcoesBoleto.buscarboletos());
})

router.get("/:id", (req, res) => {
    res.json(funcoesBoleto.buscarboleto(req.params.id));
})

router.get("/pessoa/:id", (req, res) => {
    const listaBoletoPessoa = funcoesBoleto.buscarBoletoPessoa(req.params.id)
    res.json(listaBoletoPessoa);
})

router.post("/", (req, res) => {
    const boleto = req.body;
    const pessoa = funcoesPessoa.buscarPessoa(boleto.id_pessoa);
    const usuario = funcoesUsuario.buscarUsuario(boleto.id_user);
    if(pessoa != null && usuario != null){
        if(boleto.valor > 0){
            funcoesBoleto.criarboletos(boleto)
            res.json(boleto)
        } else {
            res.status(400).send("Valor não pode ser menor que 0!")
        }
    } else {
        res.status(400).send("Pessoa ou usuario não encontrado!")
    }
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const boleto = req.body;
    funcoesBoleto.editarboleto(id, boleto)
    res.json(boleto);
})

module.exports = {
    router
}