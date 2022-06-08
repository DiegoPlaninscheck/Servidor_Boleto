const express = require('express')
const router = express.Router();

//terminar get by pessoa

const boletos = [
    {id: 1, valor: 500, id_user: 1, id_pessoa: 1, status: "pago", nome:"Diego"},
    {id: 2, valor: 600, id_user: 1, id_pessoa: 1, status: "Pendente", nome:"Diego"},
    {id: 3, valor: 400, id_user: 2, id_pessoa: 2, status: "pago", nome:"João"},
    {id: 4, valor: 300, id_user: 3, id_pessoa: 3, status: "pago", nome:"Thiago"}
]

function criarboletos(boleto){
    const pessoa = boletos.find(b => b.id_pessoa == boleto.id_pessoa && b.id_user == boleto.id_user && boleto.valor > 0);
    if(pessoa == null){
       return new Error("É preciso inserir o valor, id_user e id_pessoa! Sendo validos");
    } else {
        boleto.id = boletos.length + 1;
        boletos.push(boleto)
        return boleto;
    }
}

function buscarboletos(){
    return boletos;
}

function buscarboleto(req){
    const id = req.params.id;
    const boleto = boletos.find(p => p.id == id);
    return boleto;
}

function editarboletos(boleto, index){
    boletos[index] = boleto;
}

function buscarBoletoPessoa(id){
    const boleto = boletos.find(p => p.id_pessoa == id);
    return boleto;
}

router.get("/", (req, res) => {
    res.json(buscarboletos());
})

router.get("/:id", (req, res) => {
    res.json(buscarboleto(req));
})

router.get("/pessoa/:id", (req, res) => {
    res.json(buscarBoletoPessoa(req.params.id));
})

router.post("/", (req, res) => {
    const boleto = criarboletos(req.body);
    if(boleto.constructor.name == "Error"){
        return res.status(400).send(boleto.message);
    }
    res.json(boleto);
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const boleto = req.body;
    const index = boletos.findIndex(b => b.id == id);
    boleto.id = id;
    editarboletos(boleto, index);
    res.json(boletos);
})

module.exports = {
    router,
    criarboletos,
    buscarboletos,
    buscarboleto,
    editarboletos,
}