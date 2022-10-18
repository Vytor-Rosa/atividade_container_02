const crud = require("../../crud/index");
const fetch = require("node-fetch");


async function cadastrar(req, res) {
    const produto = req.body;

    const verif = await fetch('http://destino:3000/api/usuario/login', 
    {method: 'POST',
    body: JSON.stringify({
        description: produto.description,
        name: produto.name,
        price: produto.price,
        userCPF: produto.userCPF
    }),
    headers: {'Content-Type': 'application/json'}
    })
    if(verif){
        return await crud.salvar("Products", "", produto);
    }else{
        return "usuario inexistente"
    }
}

async function pegar(req, res) {
    return await crud.pegar("Products");
}

module.exports = {
    cadastrar,
    pegar
}