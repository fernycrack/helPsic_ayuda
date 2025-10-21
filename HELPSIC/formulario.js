function calcularResultado() {
  let total = 0;

  // Sumar los valores seleccionados
  for (let i = 1; i <= 21; i++) {
    const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
    if (respuesta) {
      total += parseInt(respuesta.value);
    }
  }

  // Mostrar mensaje
  let mensaje = "";
  if (total === 0) {
    mensaje = "Responde todas las preguntas.";
  } else if (total <= 9) {
    mensaje = "Muy bien, necesidad minima";
  } else if (total >= 10 && total <= 16) {
    mensaje = "Normal, necesidad leve";
  } else if (total > 16 && total <= 29) {
    mensaje = "Necesita apoyo, necesidad moderada";
  } else {
    mensaje = "Acercate, te ayudamos";
  }

  document.getElementById("resultado").textContent = `Puntos: ${total} - ${mensaje}`;
}

