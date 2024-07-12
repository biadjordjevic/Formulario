let botão =  document.getElementById ('button')
let botaoVoltar= document.getElementById('button1')

function Enviar() {
   
    let emailUser = document. getElementById ('email').value
    let userUser = document. getElementById ('user').value
    let senhaUser = document. getElementById ('senha').value
    let telUser = document. getElementById ('tel').value
    let Usernasc = document. getElementById ('nasc').value

    let idadeUser = document. querySelector ("input[name = 'idade']:checked").value

    alert( " Confira se todos os dados que você inseriu estão corretos:\n \n Seu email é: " + emailUser + 
    '\n seu usuário é: ' + userUser + 
    '\n sua senha é: ' + senhaUser + 
    '\n seu telefone é: ' + telUser +
     '\n sua data de nascimento é: ' + Usernasc
     + '\n sua faixa etária é do grupo: ' + idadeUser )

     

     var checkbox1 = document.getElementById("item1");
     var checkbox2 = document.getElementById("item2");
     var checkbox3 = document.getElementById("item3");
     var checkbox4 = document.getElementById("item4");
     var checkbox5 = document.getElementById("item5");
     var checkbox6 = document.getElementById("item6");
     var checkbox7 = document.getElementById("item7");
     var checkbox8 = document.getElementById("item8");

     var selecionados = ""

     
     if (checkbox1.checked) {
         selecionados += checkbox1.value + ", ";
     }
        if (checkbox2.checked) {
            selecionados += checkbox2.value + ", ";
     }
 if (checkbox3.checked) {
    selecionados += checkbox3.value + ", ";
     }
if (checkbox4.checked) {
    selecionados += checkbox4.value + ", ";
         }
 if (checkbox5.checked) {
    selecionados += checkbox5.value + ", ";
     }
       if (checkbox6.checked) {
        selecionados += checkbox6.value + ", ";
  }
 if (checkbox7.checked) {
    selecionados += checkbox7.value + ", ";
 }
 if(checkbox8.checked) {
    selecionados += checkbox8.value + ", ";
 }
     
     if(selecionados) { 
         alert("Os interesses e especialidades selecionadsos são em: " + selecionados);
        window.location.href="pagina2.html"}
    
     else {

     

        alert("Preencha todos os campos para realizar seu cadastro");}
     
     
    
}

function Voltar(){
    window.location.href="formulario.html"
}