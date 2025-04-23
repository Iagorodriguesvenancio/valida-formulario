let pessoa = []
let usu
class Pessoa{//uma class para construir pessoas
    constructor(nome,sobrenome,cpf,usuario,senha,reSenha){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.usuario = usuario
        this.senha = senha 
        this.reSenha = reSenha
    }
    
}

let cadastrar = () => { // quanto o botao e clicado isso acontece
    //pega as informaçoes do formulario
    let nome = document.querySelector("#nome").value
    let sobrenome = document.querySelector("#sobrenome").value
    let cpf = document.querySelector("#CPF").value
    let usuario =  document.querySelector("#usuario").value
    let senha = document.querySelector("#senha").value
    let reSenha = document.querySelector("#reSenha").value
    //usa a class Pessoa para criar uma pessoa
    usu = new Pessoa(nome,sobrenome,cpf,usuario,senha,reSenha)
    if(tudoCerto(nome,sobrenome,cpf,usuario,senha,reSenha)){//ve se tudo esta certo
        pessoa.push(usu)//joga a pessoa cadastrada para um arry
        alert("cadastrado")
    }
}


let Nãoexiste = (nome,sobrenome,cpf,usuario,senha,reSenha) => {//ve se as inforamções nao esto vazias
        if(nome = "" || sobrenome =="" || cpf == "" || usuario == "" || senha == "" || reSenha == ""){
            alert("digite algo")
            return true
        }else{
            return false
        }
}

let tudoCerto = (nome,sobrenome,cpf,usuario,senha,reSenha) => {
    if(Nãoexiste    (nome,sobrenome,cpf,usuario,senha,reSenha))return false//ve se as inforamções nao esto vazias
    if(senha != reSenha){alert("senhas estao diferentes"); return false}//ve se as senhas estão diferentes
    let valido = new ValidaCpf(cpf)//importa a class ValidaCpf de outro arquivo
    if(valido.valida() != true){alert("cpf invalido"); return false}//corvere se o cpf e valido
    if(usuario.length > 12 || usuario.length < 3){alert("usuario deve ter de 3 a 12 caracteres"); return false}//ve se a usuario tem de 3 a 12 caracteres
    if(senha.length > 12 || senha.length < 6){alert("senha deve ter de 6 a 12 caracteres"); return false}//ve se a senha tem de 6 a 12 caracteres
    return true 
}
