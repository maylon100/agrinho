// Referenciar o formulário e adicionar um evento de envio
document.getElementById('formNome').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Captura o valor do campo de entrada
  var nome = document.getElementById('nomeUsuario').value;

  // Verifica se o campo não está vazio
  if (nome.trim() === '') {
    alert('Por favor, informe seu nome.');
    return;
  }

  // Exibe uma mensagem de boas-vindas
  alert('Bem-vindo, ' + nome + '!');

  // Pode-se fazer mais com o nome aqui, como armazená-lo em cookies ou localStorage
});
