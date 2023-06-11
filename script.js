// Seleciona o formulário
let formulario = document.getElementById("formulario");

// Adiciona um evento de envio ao formulário
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Cria o objeto aluno
  let aluno = {};

  // Obtém os valores do formulário
  aluno.nome = document.getElementById("nome").value;
  aluno.idade = document.getElementById("idade").value;

  // Exibe na tela o nome e a idade do aluno cadastrado
  document.getElementById("resultado").innerHTML =
    "Aluno cadastrado:<br>Nome: " + aluno.nome + "<br>Idade: " + aluno.idade;
});
