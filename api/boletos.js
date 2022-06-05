const express = require('express')
const router = express.Router();

//terminar post e get by pessoa

const boletos = [
    {id: 1, valor: 123, id_user: 1, id_pessoa: 1, status: "pago", nome:"Diego"},
    {id: 2, valor: 321, id_user: 2, id_pessoa: 2, status: "pago", nome:"João"},
    {id: 3, valor: 456, id_user: 3, id_pessoa: 3, status: "pago", nome:"Thiago"}
]

function criarboletos(boleto){
    if(boleto.id_user == null || boleto.valor == null || boleto.id_user == "" || boleto.valor == ""){
       return new Error("BURRO, é preciso inserir o valor e o id_user!");
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

function deletarboletos(boleto){
    boletos.splice(boleto, 1);
}


router.get("/", (req, res) => {
    res.json(buscarboletos());
})

router.get("/:id", (req, res) => {
    res.json(buscarboleto(req));
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
    const index = boletos.findIndex(p => p.id == id);
    boleto.id = id;
    editarboletos(boleto, index);
    res.json(boletos);
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const boleto = boletos.findIndex(p => p.id == id)
    deletarboletos(boleto);
    res.json(boletos);
})


module.exports = {
    router,
    criarboletos,
    buscarboletos,
    buscarboleto,
    editarboletos,
    deletarboletos
}