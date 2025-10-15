function calcularResultado() {
  let total = 0;

  // Sumar los valores seleccionados
  for (let i = 1; i <= 10; i++) {
    const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
    if (respuesta) {
      total += parseInt(respuesta.value);
    }
  }

  // Mostrar mensaje
  let mensaje = "";
  if (total === 0) {
    mensaje = "Responde todas las preguntas.";
  } else if (total <= 25) {
    mensaje = "Muy bien";
  } else if (total >= 26 && total <= 29) {
    mensaje = "Normal";
  } else if (total > 29 && total <= 32) {
    mensaje = "Necesita apoyo";
  } else {
    mensaje = "Acercate, te ayudamos";
  }

  document.getElementById("resultado").textContent = `Puntos: ${total} - ${mensaje}`;
}
