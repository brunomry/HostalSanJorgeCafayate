import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"


function BtnWhatsApp() {
  return (
    <Link className="bg-green-600 hover:bg-green-800 px-5 py-2 text-white border-4 border-gray-400 flex items-center gap-3 fixed bottom-5 right-5 rounded-[25px]">
        <span className="text-[18px]">Reserva ahora</span>
        <FaWhatsapp className="text-[40px]"/>
    </Link>
  )
}

export default BtnWhatsApp