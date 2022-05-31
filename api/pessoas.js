const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const pessoas = [
    {id: 1, nome: "Diego", cpf: "12345678910"},
    {id: 2, nome: "João", cpf: "01987654321"},
    {id: 3, nome: "Thiago", cpf: "32165498701"},
]

function criarPessoas(pessoa){
    if(pessoa.cpf == undefined || pessoa.nome == undefined || pessoa.cpf == "" || pessoa.nome == ""){
        res.status(400).send("ANTA")
    } else {
        pessoa.id = pessoas.length + 1;
        return pessoa;
    }
}

function buscarPessoas(){
    return pessoas;
}

function buscarPessoa(req){
    const id = req.params.id;
    const pessoa = pessoas.find(p => p.id == id);
    return pessoa;
}

// function editarPessoas(pessoa){

// }

// function deletarPessoas(pessoa){

// }


router.get("/", (req, res) => {
    res.json(buscarPessoas());
})

router.get("/:id", (req, res) => {
    res.json(buscarPessoa(req));
})

router.post("/", (req, res) => {
    const pessoa = criarPessoas(req.body);
    pessoas.push(pessoa);
    res.json(pessoa);
})

// router.put("/", (req, res) => {

// })

// router.delete("/", (req, res) => {

// })


module.exports = {
    router,
    criarPessoas,
    buscarPessoas,
    buscarPessoa
}




