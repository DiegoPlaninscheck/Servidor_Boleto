const express = require("express")
const router = express.Router();
const { boletos } = require("../listas");

function buscarboletos(){
    return boletos;
}

function buscarboleto(id){
    const boleto = boletos.find(b => b.id == id);
    return boleto;
}

function buscarBoletoPessoa(id){
    const listaBoletoPessoa = []
    boletos.forEach(e => {
        if(e.id_pessoa == id){
            listaBoletoPessoa.push(e)
        }
    })
    return listaBoletoPessoa;
}

function buscarBoletoUsuario(id){
    const listaBoletoUser = []
    boletos.forEach(e => {
        if(e.id_user == id){
            listaBoletoUser.push(e)
        }
    })
    return listaBoletoUser;
}

function criarboletos(boleto){
    const id = boletos.length + 1;
    boleto.id = id
    boletos.push(boleto);
}

function editarboleto(id, boleto){
    const index = boletos.findIndex(b => b.id == id)
    boleto.id = id
    boletos[index] = boleto;
}

module.exports = { router, buscarboletos, buscarboleto, buscarBoletoPessoa, buscarBoletoUsuario, criarboletos, editarboleto }