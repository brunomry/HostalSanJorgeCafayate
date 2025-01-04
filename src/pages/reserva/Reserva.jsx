import Head from "../../common/seo/Head";
import headData from "../../common/seo/headData";
import FormReserva from "./FormReserva";

function Reserva({traduccion}) {
  return (
    <>
      <Head head={headData.reserva}></Head>
      <main className="w-[100%] vsm:py-20 vsm:px-3 mb:px-5 md:px-20 md:py-20 lg:py-32 flex justify-center flex-wrap ">
        <section className="vsm:mt-5 md:mt-10 vsm:w-[100%] xl:w-[45%]">
          <h1 className="mb-3 text-[32px] font-bold text-[#094067]">
            {traduccion.paginaReserva.title}
          </h1>
          <p className="mb-3 text-gray-600 3xl:text-[1.2rem]">
          {traduccion.paginaReserva.descripcion}
          </p>
        </section>
        <section className="d-flex flex-column align-items-center  w-[100%] ">
          <FormReserva traduccion={traduccion}></FormReserva>
        </section>
      </main>
    </>
  );
}

export default Reserva;
