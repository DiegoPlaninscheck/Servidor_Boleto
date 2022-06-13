const express = require("express");
const router = express.Router();
const funcoesPessoa = require("./function/functionPessoa")
const funcoesBoleto = require("./function/fuctionBoleto");


router.get("/", (req, res) => {
  res.json(funcoesPessoa.buscarPessoas());
});

router.get("/:id", (req, res) => {
  res.json(funcoesPessoa.buscarPessoa(req.params.id));
});

router.post("/", (req, res) => {
  // const pessoa = funcoesPessoa.criarPessoas(req.body);
  const pessoa = req.body;
  if (pessoa.nome == "" || pessoa.cpf == "" || pessoa.nome == null || pessoa.cpf == null) {
    res.status(400).send("É preciso inserir o nome e o cpf!");
  } else {
    funcoesPessoa.criarPessoas(pessoa);
  }
  // if (pessoa.constructor.name == "Error") {
  //   return res.status(400).send(pessoa.message);
  // }
  res.json(pessoa);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const pessoa = req.body;
  funcoesPessoa.editarPessoas(id, pessoa);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const boletos = funcoesBoleto.buscarBoletoPessoa(id);
  if (boletos == "" || boletos == null) {
    funcoesPessoa.deletarPessoa(id);
    res.json(funcoesPessoa.buscarPessoa())
  } else {
    res.status(400).send("Pessoa possui boletos!");
  }
});

module.exports = {
  router
};
