const crud = require("../../crud/index");

async function cadastrar(req, res){
    const usuario = req.body;
    return await crud.salvar("Users", "", usuario);
}

async function pegar(req, res){
    return await crud.pegar("Users");
}

async function login(req, res){
    const usuarios = await crud.pegar("Users");
    const cpf = req.body.userCPF;
    console.log(cpf);
    if(usuarios.findIndex(u => u.CPF == cpf) != -1){
        return true;
    }
    return false;
}

module.exports = {
    cadastrar,
    pegar,
    login
}
