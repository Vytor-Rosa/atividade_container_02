const crud = require("../../crud/index");

async function login(req, res) {
    await fetch('http://localhost:8080/api/usuario/login', 
    {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'}
    })

}

async function cadastrar(req, res) {
    const produto = req.body;

    // const verif = await fetch('http://destino:3000/api/login', 
    // {method: 'GET',
    // body: JSON.stringify({
    //     description: produto.description,
    //     name: produto.name,
    //     price: produto.price,
    //     userCPF: produto.userCPF
    // }),
    // headers: {'Content-Type': 'application/json'}})
    // if(verif){
    //     return await crud.salvar("Products", "", produto);
    // }else{
    //     return "usuario inexistente"
    // }
    return await crud.salvar("Products", "", produto);
}

async function pegar(req, res) {
    return await crud.pegar("Products");
}

module.exports = {
    cadastrar,
    pegar,
    login
}