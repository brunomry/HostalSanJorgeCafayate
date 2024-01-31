export const div = document.getElementById('fullscreen');
export const botonCerrar = document.getElementById('cerrar');
const navbar = document.querySelector('.navbar');
const itemsCarousel = document.querySelectorAll('.carousel-item');
const imagesCarousel = document.querySelectorAll('.imgCarousel');

export const abrirImagen = imageSrc => {
  navbar.classList.toggle('d-none');
    div.classList.add('d-flex','flex-column');
    imagesCarousel.forEach((img,pos) =>{
        if(itemsCarousel[pos].classList.contains('active')){
          itemsCarousel[pos].classList.remove('active')
        }

        if(img.src === imageSrc){
          itemsCarousel[pos].classList.add('active');
        }
    })
}

export const cerrarImagen = () => {
  botonCerrar.style.display = 'none';
  div.classList.remove('d-flex');
  navbar.classList.toggle('d-none');
}

const link = 'https://wa.me/+5493876843082';

document.getElementById('formQuestions').action = "https://formsubmit.co/hostalsanjorgecafayate@gmail.com";

document.getElementById('btnWhatsAppFixed').addEventListener('click', () => {
    window.open(link, '_blank');
});