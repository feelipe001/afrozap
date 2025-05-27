function gerarLink() {
  const numero = document.getElementById('numero').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (numero === '') {
    alert('Por favor, informe o número com DDD.');
    return;
  }

  const mensagemFormatada = encodeURIComponent(mensagem);
  const link = `https://wa.me/55${numero}${mensagem ? `?text=${mensagemFormatada}` : ''}`;

  document.getElementById('linkGerado').value = link;
  document.getElementById('abrirLink').href = link;
  document.getElementById('resultado').style.display = 'block';
}

function copiarLink() {
  const link = document.getElementById('linkGerado');
  link.select();
  link.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Link copiado!');
}

function limpar() {
  document.getElementById('numero').value = '';
  document.getElementById('mensagem').value = '';
  document.getElementById('resultado').style.display = 'none';
}
