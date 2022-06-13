const express = require("express")
const router = express.Router();
const { usuarios } = require("../listas")

function buscarUsuarios() {
    return usuarios;
}

function buscarUsuario(id) {
    const user = usuarios.find(p => p.id == id);
    return user;
}

function criarUsers(user) {
    const id = usuarios.length + 1;
    user.id = id
    usuarios.push(user)
}

function editarUser(id, user){
    const index = usuarios.findIndex(e => e.id == id)
    user.id = id
    usuarios[index] = user;
}

function deletarUsers(id){
    const index = usuarios.findIndex(e => e.id == id)
    usuarios.splice(index, 1);
}

module.exports = { router, buscarUsuarios, buscarUsuario, criarUsers, editarUser, deletarUsers}