console.log("Script carregou com sucesso")

var formulario = document.getElementById("form-cadastro")

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault() // Impede o envio do formulário

  var campoNome = document.getElementById("nome").value
  var campoEmail = document.getElementById("email").value

  console.log(campoNome, campoEmail)
})