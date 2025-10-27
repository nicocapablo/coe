:root{
  /* Altura mínima de la barra de entrada (botón + input) */
  --input-h: 60px;
}

/* Evitar zoom raro de Safari y usar todo el alto visible real en móviles */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: Arial, sans-serif;
}

/* Usamos 100svh que se adapta cuando aparece el teclado en iOS/Android modernos */
body{
  height: 100svh;
  display: flex;
  flex-direction: column;
  background: #ece5dd;
  overflow: hidden; /* evita saltos del fondo */
}

/* Área de mensajes: ocupa todo el alto libre y deja hueco fijo para el input (aunque sea fixed) */
.chat-container{
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  /* deja hueco para que el input (fixed) no tape los últimos mensajes */
  padding-bottom: calc(var(--input-h) + env(safe-area-inset-bottom) + 12px);
}

/* Barra inferior fija, no se mueve con el teclado */
.input-container{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  border-top: 1px solid #d1d1d1;
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  padding-bottom: calc(10px + env(safe-area-inset-bottom)); /* notch y barra gestos */
  min-height: var(--input-h);
  z-index: 10;
}

/* Input accesible (≥16px evita autofoco con zoom) */
.input-container input[type="text"]{
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  background: #fff;
}

/* Botón */
.input-container button{
  flex-shrink: 0;
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background: #128C7E;
  color: #fff;
  cursor: pointer;
}
.input-container button:active{ background: #0f786c; }

/* Mensajes estilo chat */
.message{
  max-width: 80%;
  margin: 6px 0;
  padding: 10px 12px;
  border-radius: 14px;
  word-wrap: break-word;
  display: inline-block;
}

.message.bot{
  background: #ffffff;
  align-self: flex-start;
  border-top-left-radius: 4px;
}

.message.user{
  background: #dcf8c6;
  align-self: flex-end;
  border-top-right-radius: 4px;
}

/* Contenedor flex vertical para que las burbujas respeten izquierda/derecha */
#chat{
  display: flex;
  flex-direction: column;
}

/* iOS: asegurar tipografías de 16px en inputs para que no auto-zoomee */
@supports (-webkit-touch-callout: none) {
  input, textarea { font-size: 16px !important; }
}



