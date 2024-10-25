import { MdArrowForwardIos } from "react-icons/md";
import frente from "../../assets/IMG/frente.webp";
import { Link } from "react-router-dom";

function BannerHome() {
  return (
    <div>
      <section className="bannerHome">
        <div>
          <img src={frente} alt=""/>
        </div>
        <div className="bannerHome__description flex flex-col gap-3  bg-[rgba(43,69,94,0.8)] p-3 md:p-10 lg:p-20 max-w-[950px] min-h-[100px]">
          <small className="hidden md:block text-[#fff] mb-0 text-sm">Provincia de Salta, Noroeste Argentino</small>
        <h1 className="md:block text-[20px] lg:text-[45px] text-[#fff] mt-0 font-bold">Hostal San Jorge Cafayate</h1>
        <p className="text-[18px] text-[#fff] lg:text-[20px] font-normal">Tu lugar ideal para descansar y pasar tus vacaciones.</p>
      

        <Link to={"/habitaciones"} className="p-2 md:p-4 w-[100%] flex gap-3 justify-center items-center text-[1rem] bg-amber-400  md:mt-8 text-[#0e2541] md:max-w-[270px] lg:hover:bg-gray-950 lg:hover:text-[#fff] ">
            <span>NUESTRAS HABITACIONES</span>  <MdArrowForwardIos />   
        </Link>
        <small className="text-sm text-[#fff] font-normal">Estamos a 2 cuadras de la plaza principal.</small>
        </div>        
      </section>
    </div>
  );
}

export default BannerHome;
