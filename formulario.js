let botão =  document.getElementById ('button')


function Verificação() {
   
    let emailUser = document. getElementById ('email').value
    let userUser = document. getElementById ('user').value
    let senhaUser = document. getElementById ('senha').value
    let telUser = document. getElementById ('tel').value
    let Usernasc = document. getElementById ('nasc').value

    let idadeUser = document. querySelector ("input[name = 'idade']:checked").value

    alert('Seu email é: ' + emailUser + 
    '\n seu usuário é: ' + userUser + 
    '\n sua senha é: ' + senhaUser + 
    '\n seu telefone é: ' + telUser +
     '\n sua data de nascimento é: ' + Usernasc
     + '\n sua faixa etária é do grupo: ' + idadeUser)
}