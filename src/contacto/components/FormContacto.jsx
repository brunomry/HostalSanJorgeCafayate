const FormContacto = () => {
  return (
    <form className="vsm:w-[100%] max-w-[700px] mx-auto md:border vsm:px-2 vsm:py-3 mb:p-4 md:p-10 flex flex-wrap md:gap-2 lg:gap-7 ">
            <div className="mb-3 w-[100%]">
              <label
                htmlFor="fullname"
                className="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="fullname"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 focus:border-gray-100 border-gray-300 text-gray-900    block w-full p-2.5  "
                placeholder="Juan Perez"
                title="Escribe tu nombre y apellido"
              />
            </div>
            <div className="mb-3 vsm:w-[100%] md:w-[60%]">
              <label
                htmlFor="email"
                className="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 focus:border-gray-100 border-gray-300 text-gray-900    block w-full p-2.5  "
                placeholder="nombre@ejemplo.com"
                title="Escribe tu correo electrónico"
              />
            </div>
            <div className="mb-3 vsm:w-[100%] md:w-[35%]">
              <label
                htmlFor="tel"
                className="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="tel"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 focus:border-gray-100 border-gray-300 text-gray-900    block w-full p-2.5  "
                placeholder="+54 381 1111111"
                title="Escribe tu número de celular"
              />
            </div>
            <div className="mb-3 w-[100%]">
              <label
                htmlFor="message"
                className="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="bg-gray-50 focus:border-gray-100 border-gray-300 text-gray-900    block w-full p-2.5  "
                placeholder="Escribe tu mensaje aquí..."
                title="Escribe tu consulta"
              ></textarea>
            </div>
            <div className="flex justify-center w-[100%]">
              <button className="bg-teal-400 hover:bg-teal-600 text-white p-3 vsm:w-[100%] md:w-[35%]" title="clic para confirmar envío">
                ENVIAR
              </button>
            </div>
          </form>
  )
}

export default FormContacto;