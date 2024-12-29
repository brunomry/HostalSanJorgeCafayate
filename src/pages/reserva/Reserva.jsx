import Head from "../../seo/Head";
import headData from "../../helpers/head";
import FormReserva from "./FormReserva";

function Reserva() {
  return (
    <>
      <Head head={headData.reserva}></Head>
      <main className="w-[100%] vsm:py-20 vsm:px-3 mb:px-5 md:px-20 md:py-20 lg:py-32 flex justify-center flex-wrap">
        <section className="vsm:mt-5 md:mt-10 vsm:w-[100%] xl:w-[45%]">
          <h1 className="mb-3 text-[32px] font-bold text-[#3361c4]">
            Envía tu consulta para reservar
          </h1>
          <p className="mb-3 text-gray-600">
            Completa el formulario con tus datos y fechas de estadía, y en breve
            nos pondremos en contacto.
          </p>
        </section>
        <section className="d-flex flex-column align-items-center  w-[100%] ">
          <FormReserva></FormReserva>
        </section>
      </main>
    </>
  );
}

export default Reserva;
