import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { enviarSolicitudReserva } from "../../helpers/queries";
import { useEffect, useState } from "react";
import Spinner from "../../common/Spinner";
import Alerta from "../../common/Alerta";
import { paises } from "../../helpers/paises";

const FormReserva = ({ traduccion }) => {
  const [cargando, setCargando] = useState(false);
  const [capacidad, setCapacidad] = useState(0);
  const [exito, setExito] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    reset,
    watch,
    setError,
    clearErrors,
  } = useForm();

  let totalPersonas;

  const enviarDatos = async (usuario) => {
    setCargando(true);

    try {
      totalPersonas =
        parseInt(usuario.adultos || 0) + parseInt(usuario.menores || 0);

      if (totalPersonas > 18) {
        setCargando(false);
        return;
      }

      const formData = {
        ...usuario
      };
      
      await enviarSolicitudReserva(formData);
      reset();
      setExito(true);
    } catch (error) {
      Swal.fire({
        position: "center",
        text: "❌ Hubo un error al enviar la solicitud de reserva. Intenta nuevamente más tarde.",
        timer: 3000,
        timerProgressBar: true,
      });
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    totalPersonas =
      parseInt(watch("adultos") || 0) + parseInt(watch("menores") || 0);
    setCapacidad(totalPersonas);
    if (totalPersonas > 18) {
      setExito(false);
      setError("adultos", {
        type: "manual",
        message: "La capacidad total no puede superar 18 personas",
      });
      setError("menores", {
        type: "manual",
        message: "La capacidad total no puede superar 18 personas",
      });
    } else {
      clearErrors("adultos");
      clearErrors("menores");
    }
  }, [watch("adultos"), watch("menores")]);

  return (
    <form
      className="vsm:w-[100%] shadow-md max-w-[650px] mx-auto md:border vsm:px-2 vsm:py-3 mb:p-4 md:p-10 flex flex-wrap md:gap-2 lg:gap-4 "
      onSubmit={handleSubmit(enviarDatos)}
    >
      <div className="hidden md:block md:w-full">
        {isSubmitted &&
          Object.keys(errors).some(
            (key) => errors[key]?.type === "required"
          ) && (
            <Alerta
              mensaje="Por favor, completa todos los campos."
              tipo="error"
            />
          )}
        {isSubmitSuccessful && capacidad <= 18 && exito && (
          <Alerta
            mensaje="✅ Tu solicitud de reserva fue enviada. En breve nos pondremos en contacto."
            tipo="success"
          />
        )}
      </div>
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
          title="Escribe tu nombre y apellido"
          className=" text-gray-700 block w-full p-3 focus:border-none border-gray-300"
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
              message: "Ingrese nombre y apellido válido.",
            },
          })}
        />
        {errors.nombre && errors.nombre.type !== "required" && (
          <small className="text-red-400">{errors.nombre?.message}</small>
        )}
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[52%]">
        <label
          htmlFor="email"
          className="block  font-bold text-gray-700 dark:text-white"
        >
          {traduccion.paginaReserva.formulario.email}
        </label>
        <input
          type="email"
          id="email"
          title="Escribe tu dirección de correo electrónico"
          className=" text-gray-700 block w-full p-3 focus:border-none border-gray-300"
          placeholder="nombre@ejemplo.com"
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
        {errors.email && errors.email.type !== "required" && (
          <small className="text-red-400">{errors.email?.message}</small>
        )}
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%] md:w-[45%]">
        <label htmlFor="tel" className="block dark:text-white">
          <span className="text-gray-700 font-bold">
            {traduccion.paginaReserva.formulario.telefono}
          </span>
          <small className="ms-1">(Sin 0 ni 15)</small>
        </label>
        <div className="flex gap-2 w-full">
          <div className="w-[60%]">
            <select
              id="pais"
              className=" block max-w-[100%]  py-3 rounded-none  border-gray-300 text-[12px]"
              {...register("pais", {
                required: "Seleccionar un país es obligatorio",
              })}
            >
              {paises.map((p) => (
                <option key={p.code} value={p.phone}>
                  {p.code} ({p.phone})
                </option>
              ))}
            </select>
          </div>
          <div className="w-[100%]">
            <input
              type="text"
              id="tel"
              title="Escribe tu número de celular"
              className=" text-gray-700 block w-full p-3 focus:border-none border-gray-300"
              placeholder="3811111111"
              {...register("telefono", {
                required: "El teléfono es obligatorio.",
                minLength: {
                  value: 10,
                  message: "Debe contener al menos 5 caracteres",
                },
                maxLength: {
                  value: 14,
                  message: "Debe contener como máximo 11 caracteres",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Ingrese un número de teléfono válido.",
                },
              })}
            />
          </div>
        </div>
        {errors.telefono && errors.telefono.type !== "required" && (
          <small className="text-red-400">{errors.telefono?.message}</small>
        )}
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
          title="selecciona la fecha de ingreso"
          className=" text-gray-700 block w-full p-3 focus:border-none border-gray-300"
          {...register("checkin", {
            required: "La fecha de check-in es obligatoria",
          })}
        />
        {errors.checkin && errors.checkin.type !== "required" && (
          <small className="text-red-400">{errors.checkin?.message}</small>
        )}
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
          title="selecciona la fecha de salida"
          className=" text-gray-700 block w-full p-3 focus:border-none border-gray-300"
          {...register("checkout", {
            required: "La fecha de check-out es obligatoria",
          })}
        />
        {errors.checkout && errors.checkout.type !== "required" && (
          <small className="text-red-400">{errors.checkout?.message}</small>
        )}
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
          defaultValue=""
          title="selecciona la cantidad de mayores"
          className={`${
            errors.adultos || watch("menores") === "" ? "" : ""
          } text-gray-700 block w-full p-3 focus:border-none border-gray-300`}
          {...register("adultos", {
            required: "Debe seleccionar la cantidad de adultos",
          })}
        >
          {[...Array(18).keys()].map((n) => (
            <option key={n + 1} value={n + 1}>
              {n + 1}
            </option>
          ))}
        </select>
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
          defaultValue=""
          title="selecciona la cantidad de menores"
          className={`${
            errors.menores || watch("menores") === "" ? "" : ""
          }   text-gray-700 block w-full p-3 focus:border-none border-gray-300`}
          {...register("menores")}
        >
          {[...Array(17).keys()].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      {capacidad > 18 && (
        <small className="w-full text-red-500">
          La capacidad total no puede superar las 18 personas.
        </small>
      )}
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
          title="Escribe tu consulta"
          placeholder={traduccion.paginaReserva.formulario.textarea}
          className="border-gray-300 text-gray-700 block w-full p-3 focus:border-none"
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
            pattern: {
              value: /^[\s\S]*$/,
              message: "Ingrese un mensaje válido.",
            },
          })}
        ></textarea>
        {errors.mensaje && errors.mensaje.type !== "required" && (
          <small className="text-red-400">{errors.mensaje?.message}</small>
        )}
      </div>
      <div className="flex justify-center w-[100%]">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 vsm:w-[100%] md:w-[50%] uppercase flex gap-3 justify-center items-center">
          {cargando && (
            <span>
              <Spinner></Spinner>
            </span>
          )}
          <span>{traduccion.paginaReserva.formulario.btnEnviar}</span>
        </button>
      </div>
      <div className="w-full md:hidden mt-5">
        {isSubmitted &&
          Object.keys(errors).some(
            (key) => errors[key]?.type === "required"
          ) && (
            <Alerta
              mensaje="Por favor, completa todos los campos."
              tipo="error"
            />
          )}
        {isSubmitSuccessful && capacidad <= 18 && exito && (
          <Alerta
            mensaje="✅ Tu solicitud de reserva fue enviada. En breve nos pondremos en contacto."
            tipo="success"
          />
        )}
      </div>
    </form>
  );
};

export default FormReserva;
