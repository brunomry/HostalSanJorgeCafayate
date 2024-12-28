import { MdArrowForwardIos } from "react-icons/md";
import frente from "../../assets/IMG/frente.webp";
import { Link } from "react-router-dom";

function BannerHome({ traduccion }) {
  return (
    <div>
      <section className="w-[100%] min-h-[50vh] xl:min-h-[100vh] relative">
        <div>
          <img
            src={frente}
            alt="Hostal San Jorge Cafayate"
            title="Hostal San Jorge Cafayate"
            className="w-[100%] py-14 md:py-0 min-h-[200px] object-cover md:object-fill absolute imgBannerHome xl:max-h-[800px] 2xl:min-h-[925px]"
          />
        </div>
        <div className=".bannerHome__description absolute top-[100px] left-5 right-5 mb:top-[150px] xl:top-[100px] xl:left-[100px] 2xl:left-[25%] 2xl:top-[25%] flex flex-col gap-2 md:gap-3  bg-[rgba(43,69,94,0.8)] px-3 py-5 md:p-10 xl:p-20 md:max-w-[550px] lg:max-w-[650px] xl:max-w-[800px] xl:mt-[75px] 2xl:mt-[0] min-h-[100px] rounded-[10px] md:rounded-none">
          <small className="hidden md:block text-[#fff] mb-0 text-sm">
            {traduccion.paginaHome.seccionBanner.ubicacion}
          </small>
          <h1 className="text-[.8rem] md:block md:text-[35px] lg:text-[45px] text-[#fff] mt-0 md:font-bold ">
            Hostal San Jorge Cafayate
          </h1>
          <p className="text-[18px] text-[#fff] lg:text-[20px]">
            {traduccion.paginaHome.seccionBanner.descripcion}
          </p>
          <Link
            to={"/habitaciones"}
            title="clic para ver nuestras habitaciones"
            className="uppercase vsm:px-2 mb:p-3 vsm:text-[.7rem] mb:text-[.8rem] vsm:w-[110%] mb:w-[75%] text-[14px] md:p-4 md:w-[100%] flex gap-2 justify-center items-center md:text-[1rem] lg:hover:bg-slate-900 md:mt-8 text-[#222] md:max-w-[270px] bg-yellow-300 lg:hover:text-[#fff] xl:p-5"
          >
            <span>{traduccion.paginaHome.seccionBanner.btnHabitaciones}</span>{" "}
            <MdArrowForwardIos />
          </Link>
          <small className="hidden md:block text-sm text-[#fff] font-normal">
            {traduccion.paginaHome.seccionBanner.cercania}
          </small>
        </div>
      </section>
    </div>
  );
}

export default BannerHome;
