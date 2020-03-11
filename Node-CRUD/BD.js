const usuarios = []

function getUsario(nome){
    let user = usuarios.filter((element, index) => { 
        if(element.nome === nome){
            return element 
        }
    })
    return user
}
function getUsuarios(){
    if(usuarios.length === 0){
        return 'Não existe usuários cadastrados!'
    }else{
        return usuarios
    }
}

function index (user){
    let idx = usuarios.indexOf(user)
    return idx
}

function salvarUser(user){
        
        usuarios.push(user)
        return user
}

module.exports = {salvarUser,getUsuarios, getUsario}