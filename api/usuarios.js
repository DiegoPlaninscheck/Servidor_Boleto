const express = require('express')
const router = express.Router();

//terminar delete

const users = [
    {id: 1, nome: "diego", senha: "123"},
    {id: 2, nome: "jao", senha: "321"},
    {id: 3, nome: "thigas", senha: "456"},
]

function criarusers(user){
    if(user.senha == null || user.nome == null || user.senha == "" || user.nome == ""){
       return new Error("BURRO, é preciso inserir o nome e o senha!");
    } else {
        user.id = users.length + 1;
        users.push(user)
        return user;
    }
}

function buscarusers(){
    return users;
}

function buscaruser(req){
    const id = req.params.id;
    const user = users.find(p => p.id == id);
    return user;
}

function editarusers(user, index){
    users[index] = user;
}

function deletarusers(user){
    users.splice(user, 1);
}


router.get("/", (req, res) => {
    res.json(buscarusers());
})

router.get("/:id", (req, res) => {
    res.json(buscaruser(req));
})

router.post("/", (req, res) => {
    const user = criarusers(req.body);
    if(user.constructor.name == "Error"){
        return res.status(400).send(user.message);
    }
    res.json(user);
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const index = users.findIndex(p => p.id == id);
    user.id = id;
    editarusers(user, index);
    res.json(users);
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const user = users.findIndex(p => p.id == id)
    deletarusers(user);
    res.json(users);
})


module.exports = {
    router,
    criarusers,
    buscarusers,
    buscaruser,
    editarusers,
    deletarusers
}