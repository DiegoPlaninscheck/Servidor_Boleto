const express = require('express');
const pessoas = require('./api/pessoas');
const usuarios = require("./api/usuarios")
const boletos = require("./api/boletos")
const app = express();
const port = 3000;

// res.status(400).send("Não encontrado")

app.use(express.json());
app.use("/api/pessoas", pessoas.router)
app.use("/api/usuarios", usuarios.router)
app.use("/api/boletos", boletos.router)

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`RODANDO EM ${port}`);
})

