import { FaWhatsapp } from "react-icons/fa";
import { consultaPorWhatsApp } from "../helpers/whatsApp";

function BtnWhatsApp() {
  const consultaWhatsApp = () => consultaPorWhatsApp("")

  return (
    <button onClick={consultaWhatsApp} className="bg-green-600 hover:bg-green-800 px-2 lg:px-5 py-2 text-white lg:border-4 border-gray-400 flex items-center gap-3 fixed bottom-5 md:bottom-14 right-5 rounded-[50%] lg:rounded-[25px]">
      <span className="text-[18px] hidden lg:block">Reserva ahora</span>
      <FaWhatsapp className="text-[40px]" />
    </button>
  );
}

export default BtnWhatsApp;
