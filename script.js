// --- PREGUNTAS DE PRUEBA ---
const preguntas = [
  { texto: "9 de cada 10 Startup desaparecen en 3 años por falta de clientes.", respuesta: true, explicacion: "Correcto. El principal motivo real suele ser no tener clientes suficientes." },
  { texto: "Dropbox es un buen ejemplo de crowdfunding (PMV).", respuesta: false, explicacion: "Falso. Dropbox usó un video demo tipo Mago de Oz, no crowdfunding." },
  { texto: "El bootstrapping significa financiarse con recursos propios.", respuesta: true, explicacion: "Correcto. Implica empezar sin inversión externa y con mucho control de gasto." }
];

// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien amor! 😎",
  "¡Eso es, perfecto, te camelo caramelo! 🔥",
  "¡Ole tú huevos! 💪",
  "¡Exacto, estás on fire tia! 🚀",
  "¡Muy bien pensado tronca! 🧠",
  "¡Qué máquina eres! 😍",
  "¡Correcto, así se hace! 👏",
  "¡Te lo sabes de memoria ya! 💥"
];

// --- VARIABLES GLOBALES ---
let i = 0;
let puntuacion = 0;

// --- FUNCIONES ---
function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.textContent = texto;
  chat.appendChild(msg);
  chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
}

function responder(respuestaUsuario) {
  if (!preguntas[i]) return;

  // Mostrar lo que eligió el usuario
  mostrarMensaje(respuestaUsuario ? "✔️ Verdadero" : "❌ Falso", "user");

  // Comprobar
  if (respuestaUsuario === preguntas[i].respuesta) {
    puntuacion++;
    mostrarMensaje(frases_animo[Math.floor(Math.random() * frases_animo.length)], "bot");
  } else {
    mostrarMensaje("❌ Incorrecto. " + preguntas[i].explicacion, "bot");
  }

  i++;

  // Siguiente pregunta o fin
  if (i < preguntas.length) {
    setTimeout(() => {
      mostrarMensaje(preguntas[i].texto, "bot");
    }, 700);
  } else {
    setTimeout(() => {
      mostrarMensaje(`🏁 Has acertado ${puntuacion} de ${preguntas.length} preguntas. 💡 ¡Sigue practicando, que vas de lujo!`, "bot");
      document.getElementById("btnV").disabled = true;
      document.getElementById("btnF").disabled = true;
    }, 800);
  }
}

// --- INICIO ---
window.onload = () => {
  preguntas.sort(() => Math.random() - 0.5); // mezcla aleatoria
  mostrarMensaje("🧠 Bienvenido a tu test de Verdadero/Falso. ¡Pulsa V o F para empezar! 💬", "bot");
  mostrarMensaje(preguntas[i].texto, "bot");

  // Eventos botones
  document.getElementById("btnV").onclick = () => responder(true);
  document.getElementById("btnF").onclick = () => responder(false);
};


