import Faq from "./components/Faq";
import BtnWhatsApp from "../common/BtnWhatsApp";
import Head from "../seo/Head";
import preguntas from "../helpers/faqs.js";
import headData from "../helpers/head.js";

const Faqs = () => {
  return (
    <>
      <Head head={headData.preguntas}></Head>
      <main className="px-4 py-24 w-[100%] xl:px-10 flex flex-col gap-5 md:gap-10  lg:py-36">
        <div>
          <h1 className="md:text-center text-[32px] md:text-[35px] lg:text-[45px] font-bold text-[#3361c4]">
            Preguntas frecuentes
          </h1>
          <p className="mb-3 text-gray-600 md:text-center mt-5">
            Consulta las preguntas más frecuentes de nuestros huéspedes
          </p>
        </div>
        <section
          id="accordion-collapse"
          data-accordion="collapse"
          className="border-none rounded-none outline-none flex flex-col items-center w-[100%] gap-2 md:gap-5"
        >
          {preguntas.map((faq) => (
            <Faq key={faq.id} faq={faq}></Faq>
          ))}
        </section>
        <BtnWhatsApp></BtnWhatsApp>
      </main>
    </>
  );
};

export default Faqs;
