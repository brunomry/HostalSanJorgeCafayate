const URL_MAILER = import.meta.env.VITE_API_MAILER;

export const enviarCorreo = async (usuario) => {
    try {
      const respuesta = await fetch(URL_MAILER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
    } catch (error) {
      console.error(error);
    }
  };