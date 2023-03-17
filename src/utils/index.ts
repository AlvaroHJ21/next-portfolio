export function checkIfSectionIsVisible(id: string) {
  const section = document.querySelector(`#${id}`); // selecciona la sección de HTML que te interesa
  const rect = section?.getBoundingClientRect(); // obtiene las coordenadas de la sección de HTML

  if (!rect) return;
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0; // comprueba si la sección de HTML está visible en la ventana del navegador
  console.log(
    isVisible
      ? "SI"
      : "NO"
  );
}
