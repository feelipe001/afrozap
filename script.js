
async function encurtarLink(url) {
  const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
  const linkEncurtado = await response.text();
  return linkEncurtado;
}

async function gerarLink() {
  const numero = document.getElementById('numero').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const encurtar = document.getElementById('encurtar').checked;

  if (numero === '') {
    alert('Por favor, informe o número com DDD.');
    return;
  }

  const mensagemFormatada = encodeURIComponent(mensagem);
  const link = `https://wa.me/55${numero}${mensagem ? `?text=${mensagemFormatada}` : ''}`;

  const linkFinal = encurtar ? await encurtarLink(link) : link;

  document.getElementById('linkGerado').value = linkFinal;
  document.getElementById('abrirLink').href = linkFinal;
  document.getElementById('resultado').style.display = 'block';

  document.getElementById('previewMensagem').innerText = mensagem || 'Sua mensagem aparecerá aqui';
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  document.getElementById('horario').innerText = `${horas}:${minutos}`;
  document.getElementById('preview').style.display = 'block';
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
  document.getElementById('preview').style.display = 'none';
}

function preencherTemplate(texto) {
  document.getElementById('mensagem').value = texto;
  gerarLink();
}

let directLinkAtivado = false;

document.getElementById('encurtar').addEventListener('click', function() {
    if (this.checked && !directLinkAtivado) {
        window.open('https://www.profitableratecpm.com/x9ub80a6fx?key=60e997708755ab1b84593a5acd4409eb', '_blank');
        directLinkAtivado = true;
    }
});
