
const traducoes = {
  pt: {
    titulo: "Gerador de Link para WhatsApp",
    labelNumero: "Número com DDD:",
    labelMensagem: "Mensagem:",
    botao: "Gerar Link",
    resultado: "Seu link:",
    copiar: "Copiar",
    abrir: "Abrir no WhatsApp",
    limpar: "Limpar"
  },
  en: {
    titulo: "WhatsApp Link Generator",
    labelNumero: "Phone Number with Country Code:",
    labelMensagem: "Message:",
    botao: "Generate Link",
    resultado: "Your link:",
    copiar: "Copy",
    abrir: "Open in WhatsApp",
    limpar: "Clear"
  },
  es: {
    titulo: "Generador de Enlace para WhatsApp",
    labelNumero: "Número con código de país:",
    labelMensagem: "Mensaje:",
    botao: "Generar Enlace",
    resultado: "Tu enlace:",
    copiar: "Copiar",
    abrir: "Abrir en WhatsApp",
    limpar: "Limpiar"
  }
};

function trocarIdioma() {
  const idioma = document.getElementById('language').value;
  document.getElementById('titulo').innerText = traducoes[idioma].titulo;
  document.getElementById('labelNumero').innerText = traducoes[idioma].labelNumero;
  document.getElementById('labelMensagem').innerText = traducoes[idioma].labelMensagem;
  document.getElementById('botao').innerText = traducoes[idioma].botao;
  document.getElementById('resultadoLabel').innerText = traducoes[idioma].resultado;
  document.getElementById('copiar').innerText = traducoes[idioma].copiar;
  document.getElementById('abrir').innerText = traducoes[idioma].abrir;
  document.getElementById('limpar').innerText = traducoes[idioma].limpar;
}

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
