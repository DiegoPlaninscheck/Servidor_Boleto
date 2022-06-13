const express = require("express");
const router = express.Router();

const pessoas = [
    { id: 1, nome: "Diego", cpf: "12345678910" },
    { id: 2, nome: "João", cpf: "01987654321" },
    { id: 3, nome: "Thiago", cpf: "32165498701" },
];

const usuarios = [
    {id: 1, nome: "diego", senha: "123"},
    {id: 2, nome: "jao", senha: "321"},
    {id: 3, nome: "thigas", senha: "456"},
]

const boletos = [
    {id: 1, valor: 500, id_user: 1, id_pessoa: 1, status: "pago", nome:"Diego"},
    {id: 2, valor: 600, id_user: 1, id_pessoa: 1, status: "Pendente", nome:"Diego"},
    {id: 3, valor: 400, id_user: 2, id_pessoa: 2, status: "pago", nome:"João"},
    {id: 4, valor: 300, id_user: 3, id_pessoa: 3, status: "pago", nome:"Thiago"}
]

module.exports = {router, pessoas, usuarios, boletos}