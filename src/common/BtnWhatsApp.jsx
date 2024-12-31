import { FaWhatsapp } from "react-icons/fa";
import { consultaPorWhatsApp } from "../helpers/whatsApp";

function BtnWhatsApp({traduccion}) {
  const consultaWhatsApp = () => consultaPorWhatsApp("");

  return (
    <button
      onClick={consultaWhatsApp}
      className="bg-green-500 hover:bg-green-700 px-2 lg:px-5 py-2 text-white lg:border-4 border-green-200 flex items-center gap-3 fixed bottom-5 md:bottom-14 right-5 rounded-[50%] lg:rounded-[25px]"
      title="comunícate con nosotros por WhatsApp"
    >
      <span className="text-[18px] hidden lg:block">{traduccion.btnWpp}</span>
      <FaWhatsapp className="text-[40px]" />
    </button>
  );
}

export default BtnWhatsApp;
