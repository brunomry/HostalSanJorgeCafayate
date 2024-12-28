import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { enviarCorreo } from "../../helpers/queries";

const FormContacto = () => {
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
        position: "center",
        icon: "success",
        title: "Tu mensaje fue enviado con éxito.",
        text: "Pronto recibirás una respuesta.",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Hubo un error al enviar el mensaje.",
        text: "Intenta nuevamente más tarde.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <form
      className="vsm:w-[100%] max-w-[700px] mx-auto md:border vsm:px-2 vsm:py-3 mb:p-4 md:p-10 flex flex-wrap md:gap-2 lg:gap-7 "
      onSubmit={handleSubmit(enviarDatos)}
    >
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
          })}
        />
        <small className="text-red-400">{errors.nombre?.message}</small>
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
          className="bg-gray-50 focus:border-gray-100 border-gray-300 text-gray-900 block w-full p-2.5  "
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
      <div className=" vsm:w-[100%] md:w-[35%]">
        <label
          htmlFor="tel"
          className="block mb-2  font-medium text-gray-900 dark:text-white"
        >
          Teléfono <small>(sin 0 ni 15)</small>
        </label>
        <input
          type="text"
          id="tel"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 focus:border-gray-100 border-gray-300 text-gray-900    block w-full p-2.5  "
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
          {!errors.telefono ? (
            <small className="text-gray-500">Código de país opcional</small>
          ) : (
            <small className="text-red-400"> {errors.telefono?.message}</small>
          )}
        </p>
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
        <button className="bg-emerald-500 lg:hover:bg-emerald-600 text-white p-3 vsm:w-[100%] md:w-[35%]">
          ENVIAR
        </button>
      </div>
    </form>
  );
};

export default FormContacto;
