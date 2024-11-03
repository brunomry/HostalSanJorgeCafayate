import { MdArrowForwardIos } from "react-icons/md";
import frente from "../../assets/IMG/frente.webp";
import { Link } from "react-router-dom";

function BannerHome() {
  return (
    <div>
      <section className="w-[100%] min-h-[50vh] xl:min-h-[100vh] relative">
        <div>
          <img src={frente} alt="" className="w-[100%] py-14 md:py-0 min-h-[200px] object-cover md:object-fill absolute imgBannerHome xl:max-h-[800px] 2xl:min-h-[925px]"/>
        </div>
        <div className=".bannerHome__description absolute top-[100px] left-5 right-5 mb:top-[150px] xl:top-[100px] xl:left-[100px] 2xl:left-[25%] 2xl:top-[25%] flex flex-col gap-2 md:gap-3  bg-[rgba(43,69,94,0.8)] px-3 py-5 md:p-10 xl:p-20 md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] xl:mt-[75px] 2xl:mt-[0] min-h-[100px] rounded-[10px] md:rounded-none">
          <small className="hidden md:block text-[#fff] mb-0 text-sm">Provincia de Salta, Noroeste Argentino</small>
        <h1 className="text-[.9rem] md:block md:text-[25px] lg:text-[45px] text-[#fff] mt-0 md:font-bold">Hostal San Jorge Cafayate</h1>
        <p className="text-[18px] text-[#fff] lg:text-[20px] font-normal">Tu lugar ideal para descansar y pasar tus vacaciones.</p>
        <Link to={"/habitaciones"} className="vsm:px-2 mb:p-3 vsm:text-[.9rem] mb:text-[1rem] vsm:w-[100%] mb:w-[75%] text-[14px] rounded-[5px] md:rounded-none md:p-4 md:w-[100%] flex gap-3 justify-center items-center md:text-[1rem] bg-amber-400  md:mt-8 text-[#0e2541] md:max-w-[270px] lg:hover:bg-gray-950 lg:hover:text-[#fff] xl:p-5">
            <span>NUESTRAS HABITACIONES</span>  <MdArrowForwardIos />   
        </Link>
        <small className="hidden md:block text-sm text-[#fff] font-normal">Estamos a 2 cuadras de la plaza principal.</small>
        </div>        
      </section>
    </div>
  );
}

export default BannerHome;
