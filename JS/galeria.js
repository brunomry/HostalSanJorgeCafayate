const div = document.getElementById('fullscreen');
const img = document.getElementById('fullscreenImg');
const botonCerrar = document.getElementById('cerrar');

const abrirImagen = imageSrc => {
    img.src = imageSrc;
    div.classList.add('d-flex','flex-column');    
}

const cerrarImagen = () => {
  botonCerrar.style.display = 'none';
  div.classList.remove('d-flex');
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.containerBg')) {
    abrirImagen(e.target.closest('.containerImg').querySelector('img').src);
    botonCerrar.style.display = 'block';
  }

  if (
    e.target.id === "cerrar" || 
    e.target.id === "fullscreenImg" || 
    e.target.id === "btnVolver" || 
    e.target.id === "fullscreen"
  ){
    cerrarImagen();
  }
});

const containerBg = document.getElementById("containerBg")