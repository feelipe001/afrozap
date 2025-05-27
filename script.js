
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

const traducoes = {
  pt: {
    gerar: "Gerar Link",
    copiar: "Copiar",
    abrir: "Abrir no WhatsApp",
    limpar: "Limpar",
    placeholderMensagem: "Digite sua mensagem...",
    placeholderNumero: "Ex: 21999999999",
    resultado: "Seu link:",
    titulo: "Gerador de Link para WhatsApp",
    templates: {
      "Boas-vindas": "👋 Olá! Obrigado por entrar em contato. Como posso ajudar você hoje?",
      "Promoção": "🔥 OFERTA ESPECIAL!\nAproveite nossa promoção!\nUse o código PROMO10 e ganhe 10% OFF"
    }
  },
  en: {
    gerar: "Generate Link",
    copiar: "Copy",
    abrir: "Open in WhatsApp",
    limpar: "Clear",
    placeholderMensagem: "Type your message...",
    placeholderNumero: "Ex: 5511999999999",
    resultado: "Your link:",
    titulo: "WhatsApp Link Generator",
    templates: {
      "Boas-vindas": "👋 Hello! Thanks for reaching out. How can I help you today?",
      "Promoção": "🔥 SPECIAL OFFER!\nTake advantage of our promotion!\nUse the code PROMO10 and get 10% OFF"
    }
  },
  es: {
    gerar: "Generar Enlace",
    copiar: "Copiar",
    abrir: "Abrir en WhatsApp",
    limpar: "Limpiar",
    placeholderMensagem: "Escribe tu mensaje...",
    placeholderNumero: "Ej: 5491199999999",
    resultado: "Tu enlace:",
    titulo: "Generador de Enlace para WhatsApp",
    templates: {
      "Boas-vindas": "👋 ¡Hola! Gracias por contactarnos. ¿Cómo puedo ayudarte hoy?",
      "Promoção": "🔥 ¡OFERTA ESPECIAL!\nAprovecha nuestra promoción.\nUsa el código PROMO10 y obtén 10% OFF"
    }
  }
};

function trocarIdioma() {
  const idioma = document.getElementById('language').value;
  document.getElementById('botao').innerText = traducoes[idioma].gerar;
  document.getElementById('copiar').innerText = traducoes[idioma].copiar;
  document.getElementById('abrir').innerText = traducoes[idioma].abrir;
  document.getElementById('limpar').innerText = traducoes[idioma].limpar;
  document.getElementById('resultado-label').innerText = traducoes[idioma].resultado;
  document.getElementById('titulo').innerText = traducoes[idioma].titulo;
  document.getElementById('mensagem').placeholder = traducoes[idioma].placeholderMensagem;
  document.getElementById('numero').placeholder = traducoes[idioma].placeholderNumero;

  document.querySelectorAll('.template').forEach(el => {
    const nome = el.getAttribute('data-key');
    el.innerText = nome;
    el.onclick = () => preencherTemplate(traducoes[idioma].templates[nome]);
  });
}
