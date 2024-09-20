import { abrirImagen, cerrarImagen } from "./funciones.js";

document.addEventListener('click', (e) => {
    if (e.target.closest('.containerBg')) {
        const imageSrc = e.target.closest('.containerImg').querySelector('img').src;

        abrirImagen(imageSrc);

        botonCerrar.style.display = 'block';
    }

    if (e.target.id === "cerrar" || e.target.id === "fullscreenImg" || 
        e.target.id === "btnCerrar" || e.target.id === "fullscreen") {
        cerrarImagen();
    }
});
