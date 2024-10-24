import BtnWhatsApp from "../common/BtnWhatsApp";
import politicas from "../helpers/politicas";

const Politicas = () => {
  return (
    <section className="py-20 flex justify-center">
      <div className="py-20 bg-gray-100 rounded-[10px] px-10 xl:w-[50%]">
        <h1 className="mb-3 text-[45px]">Políticas del Hostal</h1>
        <p className="text-gray-600">
          A continuación, te presentamos nuestras políticas generales para asegurar una estadía cómoda y segura en el hostal.
        </p>
        <ol className="flex flex-col mt-3">
          {politicas.map((politica, index) => (
            <li key={index} className="flex flex-col gap-2 mb-5">
              <h2 className="text-[18px] font-semibold">{politica.titulo}</h2>
              <p className="text-gray-600">{politica.descripcion}</p>
              {politica.lista && (
                <ul className="list-disc list-inside ms-3">
                  {politica.lista.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
      <BtnWhatsApp></BtnWhatsApp>
    </section>
  );
};

export default Politicas;
