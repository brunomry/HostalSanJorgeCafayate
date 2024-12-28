import BtnWhatsApp from "../common/BtnWhatsApp";
import headData from "../helpers/head";
import Head from "../seo/Head";

const Politicas = ({ traduccion }) => {
  const politicas = traduccion.paginaPoliticas.politicas;

  return (
    <>
      <Head head={headData.politicas}></Head>
      <main className="w-[100%] py-20 lg:py-40 flex justify-center vsm:px-4 md:px-10">
        <section className="vsm:py-10 lg:py-20 bg-gray-100 rounded-[10px] vsm:px-4 mb:px-10 xl:w-[70%] 2xl:w-[60%]">
          <h1 className="mb-3 text-center text-[28px] lg:text-[32px] xl:text-[40px] font-bold">
            {traduccion.paginaPoliticas.title}
          </h1>
          <p className="text-gray-600 text-justify">
            {traduccion.paginaPoliticas.descripcion}
          </p>
          <ol className="flex flex-col mt-3">
            {politicas.map((politica, index) => (
              <li key={index} className="flex flex-col gap-2 mb-5">
                <h2 className="text-[18px] font-semibold">{politica.titulo}</h2>
                <p className="text-gray-600 text-justify">
                  {politica.descripcion}
                </p>
                {politica.lista && (
                  <ul className="list-disc list-inside ms-3">
                    {politica.lista.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-justify">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>
        <BtnWhatsApp traduccion={traduccion}></BtnWhatsApp>
      </main>
    </>
  );
};

export default Politicas;
