const express = require('express')
const router = express.Router();
const funcoesUsuario = require("./function/fuctionUsuario")
const funcoesBoleto = require("./function/fuctionBoleto")

router.get("/", (req, res) => {
    res.json(funcoesUsuario.buscarUsuarios());
})

router.get("/:id", (req, res) => {
    res.json(funcoesUsuario.buscarUsuario(req.params.id));
})

router.post("/", (req, res) => {
    const user = req.body
    if(user.nome == null || user.senha == null || user.senha == "" || user.nome == ""){
        res.status(400).send("É preciso inserir o nome e a senha!");
    } else {
        funcoesUsuario.criarUsers(user);
        res.json(user)
    }
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const user = req.body;
    funcoesUsuario.editarUser(id, user);
    res.json(user);
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const boletos = funcoesBoleto.buscarBoletoUsuario(id)
    if(boletos == "" || boletos == null){
        funcoesUsuario.deletarUsers(id);
        res.json(funcoesUsuario.buscarUsuarios())
    } else {
        res.status(400).send("Não é possível deletar o usuário, pois existem boletos vinculados a ele!");
    }
})

module.exports = {
    router
}