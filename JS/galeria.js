const navbar = document.querySelector('.navbar');
const div = document.getElementById('fullscreen');
const botonCerrar = document.getElementById('cerrar');
const itemsCarousel = document.querySelectorAll('.carousel-item');
const imagesCarousel = document.querySelectorAll('.imgCarousel');

const abrirImagen = imageSrc => {
    div.classList.add('d-flex','flex-column');
    navbar.classList.toggle('d-none');
    imagesCarousel.forEach((img,pos) =>{
        if(itemsCarousel[pos].classList.contains('active')){
          itemsCarousel[pos].classList.remove('active')
        }

        if(img.src === imageSrc){
          itemsCarousel[pos].classList.add('active');
        }
    })
}

const cerrarImagen = () => {
  botonCerrar.style.display = 'none';
  div.classList.remove('d-flex');
  navbar.classList.toggle('d-none');
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.containerBg')) {
    abrirImagen(e.target.closest('.containerImg').querySelector('img').src);
    botonCerrar.style.display = 'block';
  }

  if (
    e.target.id === "cerrar" || 
    e.target.id === "fullscreenImg" || 
    e.target.id === "btnCerrar" || 
    e.target.id === "fullscreen"
  ){
    cerrarImagen();
  }
});