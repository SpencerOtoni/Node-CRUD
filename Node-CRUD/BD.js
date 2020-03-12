const usuarios = []

function getUser(nome){
    let user = usuarios.filter((element) => { 
        if(element.nome === nome){
            return element 
        }
    })
    return user
}
function getUsers(){
    if(usuarios.length === 0){
        return 'Não existe usuários cadastrados!'
    }else{
        return usuarios
    }
}

function UserCadastrado(user){
    let existe = false
    usuarios.forEach((element) => {
        if(element.nome === user.nome){
           existe = true
        }
    })
    return existe
}

function indexUsuario(nome){
    let idx = -1
    usuarios.forEach((element, index) => {
        if(element.nome === nome){
            idx = index
        }
    })
    return idx
}

function saveUser(user){
    if(usuarios.length === 0){
        usuarios.push(user)
        return user
    }else{
        if(!UserCadastrado(user)){
            usuarios.push(user)
            return user
        }else{
            return'Usuários cadastrados!'
        }
    }
}

function deleteUser(nome){
    let idx = indexUsuario(nome)
    if(idx != -1){
        let user =  usuarios[idx]
        usuarios.splice(idx,1)
        return user 
    }else{
        return `Usuário não cadastrado!`
    } 
}

function updateUser(nome, user){
    if(UserCadastrado(user)){
        let idx = indexUsuario(nome)
        usuarios[idx] = user
        return user
    }else{
        return `Usuário não cadastrado!`
    } 
}

module.exports = {saveUser, getUser, getUsers, deleteUser, updateUser}