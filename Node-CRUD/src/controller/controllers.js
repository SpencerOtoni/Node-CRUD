const usuarios = []

function getUser(req,res){
    console.log(req.params.nome)
    let user = usuarios.filter((element) => { 
        
        if(element.nome === req.params.nome){
            return element
        }
    })
    if (user.length != 0){
        return res.send(user)
    }else{
        return res.send('Usuários cadastrados!')
    }
}
function getUsers(req,res){
    if(usuarios.length === 0){
        return res.send('Não existe usuários cadastrados!')
    }else{
        return res.send(usuarios)
    }
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

function saveUser(req, res){
    const usuario = {
        nome: req.body.nome,
        idade: req.body.idade,
        sexo: req.body.sexo
    }
    if(usuarios.length === 0){
        usuarios.push(usuario)
        res.send(usuario)
    }else{
        let idx = indexUsuario(usuario.nome)
        if(idx == -1){
            usuarios.push(usuario)
            res.send(usuario)
        }else{
            res.send('Usuários cadastrados!')
        }
    }
}

function deleteUser(req, res){
    let idx = indexUsuario(req.params.nome)
    if(idx != -1){
        let usuario =  usuarios[idx]
        usuarios.splice(idx,1)
        return res.send(usuario)
    }else{
        return res.send(`Usuário não cadastrado!`)
    } 
}

function updateUser(req, res){
    let idx = indexUsuario(req.params.nome)
    if(idx != -1){
        const usuario = {
            nome: req.body.nome,
            idade: req.body.idade,
            sexo: req.body.sexo
        }
        usuarios[idx] = usuario
        return res.send(usuario)
    }else{
        return res.send(`Usuário não cadastrado!`)
    } 
}

module.exports = {saveUser, getUser, getUsers, deleteUser, updateUser}