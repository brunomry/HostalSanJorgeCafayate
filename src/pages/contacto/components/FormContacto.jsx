import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { enviarCorreo } from "../../../helpers/queries";
import Spinner from "../../../common/Spinner";
import Alerta from "../../../common/Alerta";
import { paises } from "../../../helpers/paises";
import { useState } from "react";

const FormContacto = ({traduccion}) => {
    const [cargando, setCargando] = useState(false);
    const [exito, setExito] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    reset
  } = useForm();

  const enviarDatos = async (usuario) => {
    setCargando(true);

    try {
      await enviarCorreo(usuario);
      reset();
      setExito(true);

    } catch (error) {
      Swal.fire({
        position: "bottom",
        title: `${traduccion.validaciones.form_error}`,
        text: `${traduccion.validaciones.form_error_text}`,
        timer: 3000,
      });
    }finally {
      setCargando(false);
    }
  };

  return (
    <form
      className="vsm:w-[100%] bg-[#fff] rounded-[8px] shadow-lg max-w-[550px] mx-auto md:border vsm:px-2 vsm:py-3 mb:p-4 md:p-10 flex flex-wrap md:gap-2 lg:gap-4 3xl:text-[1.2rem]"
      onSubmit={handleSubmit(enviarDatos)}
    >
      <div className="hidden md:block md:w-full">
        {isSubmitted &&
          Object.keys(errors).some(
            (key) => errors[key]?.type === "required"
          ) && (
            <Alerta
              mensaje={traduccion.validaciones.form_required}
              tipo="error"
            />
          )}
        {isSubmitSuccessful && exito && (
          <Alerta
            mensaje={traduccion.validaciones.form_exito}
            tipo="success"
          />
        )}
      </div>
      <div className="mb-2 lg:mb-0 w-[100%]">
        <label
          htmlFor="fullname"
          className="block  font-bold text-[#094067] dark:text-white"
        >
          {traduccion.paginaReserva.formulario.nombre}
        </label>
        <input
          type="text"
          id="fullname"
          title="Escribe tu nombre y apellido"
          className=" text-[#094067] block w-full p-3 focus:border-none border-gray-300"
          placeholder="Juan Perez"
          {...register("nombre", {
            required: "El nombre y apellido es obligatorio",
            minLength: {
              value: 7,
              message: `${traduccion.validaciones.nombre.minLength}`,
            },
            maxLength: {
              value: 30,
              message: `${traduccion.validaciones.nombre.maxLength}`,
            },
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/,
              message: `${traduccion.validaciones.nombre.pattern}`,
            },
          })}
        />
        {errors.nombre && errors.nombre.type !== "required" && (
          <small className="text-red-400">{errors.nombre?.message}</small>
        )}
      </div>
      <div className="mb-2 lg:mb-0 w-[100%] ">
        <label
          htmlFor="email"
          className="block  font-bold text-[#094067] dark:text-white"
        >
          {traduccion.paginaReserva.formulario.email}
        </label>
        <input
          type="email"
          id="email"
          title="Escribe tu dirección de correo electrónico"
          className=" text-[#094067] block w-full p-3 focus:border-none border-gray-300"
          placeholder="nombre@ejemplo.com"
          {...register("email", {
            required: "El correo electrónico es obligatorio",
            minLength: {
              value: 4,
              message:
                `${traduccion.validaciones.email.minLength}`,
            },
            maxLength: {
              value: 265,
              message:
                `${traduccion.validaciones.email.maxLength}`,
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: `${traduccion.validaciones.email.pattern}`,
            },
          })}
        />
        {errors.email && errors.email.type !== "required" && (
          <small className="text-red-400">{errors.email?.message}</small>
        )}
      </div>
      <div className="mb-2 lg:mb-0 vsm:w-[100%]">
        <label htmlFor="tel" className="block dark:text-white">
          <span className="text-[#094067] font-bold">
            {traduccion.paginaReserva.formulario.telefono}
          </span>
          <small className="ms-1">(Sin 0 ni 15)</small>
        </label>
        <div className="flex gap-2 w-full">
          <div className="">
            <select
              id="pais"
              name="pais"
              className=" block max-w-[100%]  py-3 rounded-none  border-gray-300 text-[12px]"
              {...register("pais", {
                required: "Seleccionar un país es obligatorio",
              })}
            >
              {paises.map((pais) => (
                <option key={pais.code} value={pais.phone}>
                  {pais.code} ({pais.phone})
                </option>
              ))}
            </select>
          </div>
          <div className="w-[100%]">
            <input
              type="text"
              id="tel"
              title="Escribe tu número de celular"
              className=" text-[#094067] block w-full p-3 focus:border-none border-gray-300"
              placeholder="3811111111"
              {...register("telefono", {
                required: "El teléfono es obligatorio.",
                minLength: {
                  value: 5,
                  message: `${traduccion.validaciones.telefono.minLength}`,
                },
                maxLength: {
                  value: 11,
                  message: `${traduccion.validaciones.telefono.maxLength}`,
                },
                pattern: {
                  value: /^\d+$/,
                  message: `${traduccion.validaciones.telefono.pattern}`,
                },
              })}
            />
          </div>
        </div>
        {errors.telefono && errors.telefono.type !== "required" && (
          <small className="text-red-400">{errors.telefono?.message}</small>
        )}
      </div>
      <div className="mb-3 lg:mb-0 w-[100%]">
        <label
          htmlFor="message"
          className="block  font-bold text-[#094067] dark:text-white"
        >
          {traduccion.paginaReserva.formulario.mensaje}
        </label>
        <textarea
          id="message"
          rows="4"
          title="Escribe tu consulta"
          placeholder={traduccion.paginaReserva.formulario.textarea}
          className="border-gray-300 text-[#094067] block w-full p-3 focus:border-none"
          {...register("mensaje", {
            required: "El mensaje es obligatorio",
            minLength: {
              value: 25,
              message: `${traduccion.validaciones.mensaje.minLength}`,
            },
            maxLength: {
              value: 500,
              message: `${traduccion.validaciones.mensaje.maxLength}`,
            },
            pattern: {
              value: /^[\s\S]*$/,
              message:`${traduccion.validaciones.mensaje.pattern}`,
            },
          })}
        ></textarea>
        {errors.mensaje && errors.mensaje.type !== "required" && (
          <small className="text-red-400">{errors.mensaje?.message}</small>
        )}
      </div>
      <div className="flex justify-center w-[100%]">
        <button className="bg-[#3d89c0] rounded-[6px] text-white p-3 vsm:w-[100%] md:w-[50%] uppercase flex gap-3 justify-center items-center">
          {cargando && (
            <span>
              <Spinner></Spinner>
            </span>
          )}
          <span>{traduccion.paginaContacto.formulario.btnEnviar}</span>
        </button>
      </div>
      <div className="w-full md:hidden mt-5">
        {isSubmitted &&
          Object.keys(errors).some(
            (key) => errors[key]?.type === "required"
          ) && (
            <Alerta
              mensaje={traduccion.validaciones.form_required}
              tipo="error"
            />
          )}
        {isSubmitSuccessful && exito && (
          <Alerta
            mensaje={traduccion.validaciones.form_exito}
            tipo="success"
          />
        )}
      </div>
    </form>
  );
};

export default FormContacto;
