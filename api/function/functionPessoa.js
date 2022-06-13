const express = require("express");
const router = express.Router();
const { pessoas }  = require("../listas");

function buscarPessoas() {
    return pessoas;
}

function buscarPessoa(id) {
    const pessoa = pessoas.find((p) => p.id == id);
    return pessoa;
}

function criarPessoas(pessoa) {
// return new Error("É preciso inserir o nome e o cpf!");
    const id = pessoas.length + 1;
    pessoa.id = id;
    pessoas.push(pessoa);
}

function editarPessoas(id, pessoa) {
    const index = pessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    pessoas[index] = pessoa;
}

function deletarPessoa(id) {
    const index = pessoas.findIndex(p => p.id == id)
    pessoas.splice(index, 1);
}

module.exports = {router, deletarPessoa, editarPessoas, criarPessoas, buscarPessoa, buscarPessoas};