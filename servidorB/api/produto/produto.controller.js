const express = require("express");
const router = express.Router();

const produtoHandler = require("./produto.handler");

router.post("/produto", (req, res)=>{
    produtoHandler.cadastrar(req, res).then(dados => res.send(dados));
});

router.post("/produto/login", (req, res)=>{
    produtoHandler.login(req, res).then(dados => res.send(dados));
});

router.get("/produto", (req, res)=>{
    produtoHandler.pegar(req, res).then(dados => res.send(dados));
})

module.exports = router;