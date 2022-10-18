const express = require("express");
const router = express.Router();

const usuarioHandler = require("./usuario.handler");

router.post("/usuario", (req, res)=>{
    usuarioHandler.cadastrar(req, res).then(dados => res.send(dados));
});

router.get("/usuario", (req, res)=>{
    usuarioHandler.pegar(req, res).then(dados => res.send(dados));
})

router.get("/usuario/login", (req, res)=>{
    usuarioHandler.login(req, res).then(dados => {
        if(dados){
            res.send(dados)
        }else{
            res.send(false);
        }
    });
});

module.exports = router;