export const consultaPorWhatsApp = (consulta) => {
    const numeroTelefono = `+5493876843082`;
    
    const link = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(consulta)}`;
    window.open(link, '_blank');
}

