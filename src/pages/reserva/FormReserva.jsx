import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { enviarSolicitudReserva } from "../../helpers/queries";

const FormReserva = ({ traduccion }) => {
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
        consulta: usuario.consulta,
        checkin: usuario.checkin,
        checkout: usuario.checkout,
        adultos: usuario.adultos,
        menores: usuario.menores,
      };

      await enviarSolicitudReserva(formData);
      reset();

      Swal.fire({
        position: "center",
        title: "✅ Tu solicitud de reserva fue enviada.",
        text: "En breve nos pondremos en contacto. Muchas gracias!",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        title: "❌ Hubo un error al enviar la solicitud de reserva.",
        text: "Intenta nuevamente más tarde.",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <form
      className="vsm:w-[100%] shadow-md max-w-[600px] mx-auto md:border vsm:px-2 vsm:py-3 mb:p-4 md:p-10 flex flex-wrap md:gap-2 lg:gap-5 "
      onSubmit={handleSubmit(enviarDatos)}
    >
      <div className="mb-2 lg:mb-0 w-[100%]">
        <label
          htmlFor="fullname"
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.nombre}
        </label>
        <input
          type="text"
          id="fullname"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          placeholder="Juan Perez"
          {...register("nombre", {
            required: "El nombre y apellido es obligatorio",
            minLength: {
              value: 7,
              message: "Debe tener al menos 7 caracteres",
            },
            maxLength: {
              value: 30,
              message: "Debe tener como máximo 30 caracteres",
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
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.email}
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          placeholder="nombre@ejemplo.com"
          {...register("email", {
            required: "El correo electrónico es obligatorio",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Correo inválido",
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
          <span className="text-gray-700 font-bold">{traduccion.paginaReserva.formulario.telefono}</span>
          <small className="ms-1">(Sin 0 ni 15)</small>
        </label>
        <input
          type="text"
          id="tel"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          placeholder="+54 3811111111"
          {...register("telefono", {
            required: "El teléfono es obligatorio.",
            pattern: { value: /^\+?[0-9\s]+$/, message: "Teléfono inválido" },
          })}
        />
        <small className="text-red-400">{errors.telefono?.message}</small>
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[48%]">
        <label
          htmlFor="checkin"
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.llegada}
        </label>
        <input
          type="date"
          id="checkin"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          {...register("checkin", {
            required: "La fecha de check-in es obligatoria",
          })}
        />
        <small className="text-red-400">{errors.checkin?.message}</small>
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[48%]">
        <label
          htmlFor="checkout"
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.salida}
        </label>
        <input
          type="date"
          id="checkout"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          {...register("checkout", {
            required: "La fecha de check-out es obligatoria",
          })}
        />
        <small className="text-red-400">{errors.checkout?.message}</small>
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[48%]">
        <label
          htmlFor="adultos"
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.adultos}
        </label>
        <select
          id="adultos"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          {...register("adultos", {
            required: "Debe seleccionar la cantidad de adultos",
          })}
        >
          {[...Array(10).keys()].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <small className="text-red-400">{errors.adultos?.message}</small>
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[48%]">
        <label
          htmlFor="menores"
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.menores}
        </label>
        <select
          id="menores"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          {...register("menores")}
        >
          {[...Array(10).keys()].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <small className="text-red-400">{errors.menores?.message}</small>
      </div>
      <div className="mb-3 lg:mb-0 w-[100%]">
        <label
          htmlFor="message"
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.mensaje}
        </label>
        <textarea
          id="message"
          rows="4"
          className="bg-gray-50 border-gray-300 text-gray-700 block w-full p-2.5"
          {...register("consulta", {
            required: "La consulta es obligatoria",
            minLength: {
              value: 25,
              message: "La consulta debe contener al menos 25 caracteres",
            },
            maxLength: {
              value: 500,
              message: "La consulta debe contener como máximo 500 caracteres",
            },
          })}
        ></textarea>
        <small className="text-red-400">{errors.consulta?.message}</small>
      </div>
      <div className="flex justify-center w-[100%]">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 vsm:w-[100%] md:w-[50%] uppercase">
          {traduccion.paginaReserva.formulario.btnEnviar}
        </button>
      </div>
    </form>
  );
};

export default FormReserva;
