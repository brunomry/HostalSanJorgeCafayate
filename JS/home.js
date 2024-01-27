import { traducciones } from "./traducciones.js";

document.addEventListener("DOMContentLoaded", () => {
  let h1 = document.getElementById("welcomeTitle");
  const TEXTO = traducciones.es["sectionWelcome.title"];

  const iniciarEfecto = () => {
    h1.innerHTML = "";
    escribirTexto(TEXTO, 0, h1, iniciarEfecto);
  };

  const escribirTexto = (texto, comienzo, elemento, callback) => {
    if (comienzo < texto.length) {
      elemento.innerHTML += texto.charAt(comienzo);
      comienzo++;
      setTimeout(() => {
        escribirTexto(texto, comienzo, elemento, callback);
      }, 100);
    } else {
      setTimeout(callback, 1000);
    }
  };
  iniciarEfecto();
});
