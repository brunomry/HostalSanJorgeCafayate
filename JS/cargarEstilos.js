window.addEventListener('load', function() {
  const cargarEstilos = () => {
      let urlActual = window.location.href;
      let estilosAUsar = '';
      switch (true) {
          case urlActual.includes('index.html'):
              estilosAUsar = './CSS/index.min.css';
              break;
          case urlActual.includes('habitaciones.html'):
              estilosAUsar = '../CSS/habitaciones.min.css';
              break;
          case urlActual.includes('galeria.html'):
              estilosAUsar = '../CSS/galeria.min.css';
              break;
          case urlActual.includes('comoLlegar.html'):
              estilosAUsar = '../CSS/comoLlegar.min.css';
              break;
          case urlActual.includes('preguntasFrecuentes.html'):
              estilosAUsar = '../CSS/preguntasFrecuentes.min.css';
              break;
          default:
              break;
      }

      let linkEstilos = document.createElement('link');
      linkEstilos.rel = 'stylesheet';
      linkEstilos.href = estilosAUsar;
      document.head.appendChild(linkEstilos);
  }

  cargarEstilos();
});