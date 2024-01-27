import { traducciones } from './traducciones.js';

const opcionEs = document.getElementById('optionEs')
const opcionEn = document.getElementById('optionEn')

const obtenerIdioma = () => {
  const idiomaActual = localStorage.getItem('idiomaKey');
  if (idiomaActual) 
    cambiarIdioma(idiomaActual);
}

const cambiarIdioma = idioma => {
  const traduccion = traducciones[idioma];
  if (traduccion) {
    const elementoBody = document.body;
    cambiarTraduccion(elementoBody, traduccion, idioma);
    localStorage.setItem('idiomaKey', idioma);
  }
}

const formatearTexto = texto => texto.replace(/\s+/g, ' ').trim();

const cambiarTraduccion = (elemento, traduccion, idioma) => {
  if (elemento.nodeType === Node.TEXT_NODE && elemento.textContent.trim() !== '') {

    let textoFormateado = formatearTexto(elemento.textContent);
    console.log(textoFormateado)
    if(idioma === 'en'){
      for (const key in traduccion) {
        if (traducciones.es[key] === textoFormateado) {
          elemento.textContent = traducciones.en[key];
          break;
        }
      }
    }else if(idioma === 'es'){
      for (const key in traduccion) {
        if (traducciones.en[key] === textoFormateado) {
          elemento.textContent = traducciones.es[key];
          break;
        }
      }
    }   
  }

  elemento.childNodes.forEach(nodoHijo => {
    cambiarTraduccion(nodoHijo, traduccion, idioma);
  });
}

obtenerIdioma();
cambiarIdioma('es')

opcionEs.addEventListener('click', (e) => {
  cambiarIdioma('es');
})

opcionEn.addEventListener('click', (e) => {
  cambiarIdioma('en');
})