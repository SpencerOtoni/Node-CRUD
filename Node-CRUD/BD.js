const usuarios = []

function getUsario(nome){
    let user = usuarios.filter((element) => { 
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
    let idx = -1
    usuarios.forEach((element, index) => {
        if(element.nome === user.nome){
            idx = index
        }
    })
    return idx
}

function salvarUser(user){
    if(usuarios.length === 0){
        usuarios.push(user)
        return user
    }else{
        if(index(user) === -1){
            usuarios.push(user)
            return user
        }else{
            return'Usuários cadastrados!'
        }
    }
}

function deleteUsuario(user){
    let idx = index(user)
    let user = usuarios[idx]
    usuarios.splice(idx,1)
    return `Usuário ${user.nome}, foi deletado!`
}

module.exports = {salvarUser,getUsuarios, getUsario, deleteUsuario}