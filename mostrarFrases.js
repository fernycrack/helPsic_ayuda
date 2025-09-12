function obtenerDia() {
  const now = new Date();
  return (now.getDate() - 1) % 31;
}

function loadText(filePath, elementSelector) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      const lines = data.split("\n").map(line => line.trim()).filter(line => line.length > 0);
      const index = obtenerDia() % lines.length; 
      document.querySelector(elementSelector).innerText = lines[index];
    })
    .catch(error => console.error("Error cargando archivo:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadText("/txt/consejos.txt", ".seccion-5 .columna-1 p");

  loadText("/txt/frases.txt", ".seccion-5 .columna-2 p");
});
