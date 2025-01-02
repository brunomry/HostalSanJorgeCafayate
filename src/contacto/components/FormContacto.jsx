import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { enviarCorreo } from "../../helpers/queries";

const FormContacto = ({traduccion}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const enviarDatos = async (usuario) => {
    try {
      const formData = {
        nombre: usuario.nombre,
        email: usuario.email,
        telefono: usuario.telefono,
        mensaje: usuario.mensaje,
      };

      await enviarCorreo(formData);
      reset();

      Swal.fire({
        position: "bottom",
        title: "✅ Tu mensaje fue enviado.",
        text: "Pronto recibirás una respuesta.",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire({
        position: "bottom",
        title: "❌ Hubo un error al enviar el mensaje.",
        text: "Intenta nuevamente más tarde.",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <form
      className="vsm:w-[100%] max-w-[650px] mx-auto md:border vsm:px-2 vsm:py-3 mb:p-4 md:p-10 flex flex-wrap md:gap-2 lg:gap-5 "
      onSubmit={handleSubmit(enviarDatos)}
    >
      <div className="mb-2 lg:mb-0 w-[100%]">
        <label
          htmlFor="fullname"
          className="block   font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaContacto.formulario.nombre}
        </label>
        <input
          type="text"
          id="fullname"
          aria-describedby="helper-text-explanation"
          className=" focus:border-gray-100 border-gray-300 text-gray-700    block w-full p-3  "
          placeholder="Juan Perez"
          title="Escribe tu nombre y apellido"
          {...register("nombre", {
            required: "El nombre y apellido es obligatorio",
            minLength: {
              value: 7,
              message:
                "El nombre y apellido debe tener como minimo 7 caracteres",
            },
            maxLength: {
              value: 30,
              message:
                "El nombre y apellido debe tener como maximo 30 caracteres",
            },
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/,
              message: "Ingrese un nombre y apellido válidos.",
            },
          })}
        />
        <small className="text-red-400">{errors.nombre?.message}</small>
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[60%]">
        <label
          htmlFor="email"
          className="block   font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaContacto.formulario.email}
        </label>
        <input
          type="email"
          id="email"
          aria-describedby="helper-text-explanation"
          className=" focus:border-gray-100 border-gray-300 text-gray-700 block w-full p-3  "
          placeholder="nombre@ejemplo.com"
          title="Escribe tu correo electrónico"
          {...register("email", {
            required: "El correo electrónico es obligatorio",
            minLength: {
              value: 4,
              message:
                "El correo electrónico debe contener al menos 4 caracteres",
            },
            maxLength: {
              value: 265,
              message:
                "El correo electrónico debe contener como máximo 265 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Ingrese una dirección de correo electrónico válida",
            },
          })}
        />
        <small className="text-red-400">{errors.email?.message}</small>
      </div>

      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[35%]">
        <label
          htmlFor="tel"
          className="block dark:text-white"
        >
          <span className="font-bold text-gray-700">{traduccion.paginaContacto.formulario.telefono}</span>
          <small className="ms-1">(sin 0 ni 15)</small>
        </label>
        <input
          type="text"
          id="tel"
          aria-describedby="helper-text-explanation"
          className=" focus:border-gray-100 border-gray-300 text-gray-700    block w-full p-3  "
          placeholder="+54 3811111111"
          title="Escribe tu número de celular"
          {...register("telefono", {
            required: "El teléfono es obligatorio.",
            minLength: {
              value: 10,
              message: "El teléfono debe contener al menos 10 caracteres",
            },
            maxLength: {
              value: 14,
              message: "El teléfono debe contener como máximo 14 caracteres",
            },
            pattern: {
              value: /^\+?[0-9\s]+$/,
              message: "Ingrese un teléfono válido.",
            },
          })}
        />
        <p>
          {!errors.telefono && (
            <small className="text-red-400"> {errors.telefono?.message}</small>
          )
          }
        </p>
      </div>
      <div className="mb-3 lg:mb-0 w-[100%]">
        <label
          htmlFor="message"
          className="block   font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaContacto.formulario.mensaje}
        </label>
        <textarea
          id="message"
          rows="4"
          className=" focus:border-gray-100 border-gray-300 text-gray-700    block w-full p-3  "
          placeholder={traduccion.paginaContacto.formulario.textarea}
          title="Escribe tu consulta"
          {...register("mensaje", {
            required: "El mensaje es obligatorio",
            minLength: {
              value: 25,
              message: "El mensaje debe contener al menos 25 caracteres",
            },
            maxLength: {
              value: 500,
              message: "El mensaje debe contener como máximo 500 caracteres",
            },
          })}
        ></textarea>
        <small className="text-red-400">{errors.mensaje?.message}</small>
      </div>
      <div className="flex justify-center w-[100%]">
        <button className="bg-emerald-500 lg:hover:bg-emerald-600 text-white p-4 vsm:w-[100%] md:w-[35%] uppercase">
          {traduccion.paginaContacto.formulario.btnEnviar}{" "}
        </button>
      </div>
    </form>
  );
};

export default FormContacto;
