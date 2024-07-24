<h2>Bem-vindo ao nosso site!</h2>
<form id="formEntrada" onsubmit="validarNome(event)">
  <label for="nomeUsuario">Por favor, informe seu nome:</label><br>
  <input type="text" id="nomeUsuario" name="nomeUsuario" required><br><br>
  <button type="submit">Entrar</button>
</form>

<script>
  function validarNome(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Captura o valor do campo de entrada
    var nome = document.getElementById('nomeUsuario').value;

    // Verifica se o campo não está vazio
    if (nome.trim() === '') {
      alert('Por favor, informe seu nome.');
      return;
    }

    // Caso o nome seja válido, redireciona para o site principal (ou outra página)
    alert('Bem-vindo, ' + nome + '!');
    // Aqui você pode redirecionar para outra página
    // window.location.href = 'pagina_principal.html';
  }
</script>
</body>
</html>