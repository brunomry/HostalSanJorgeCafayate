import { Helmet } from "react-helmet";
import "./styles/home.css";
import BannerHome from "./components/BannerHome";

function Home() {
  return (
    <main>
      <Helmet>
        <meta
          name="description"
          content="Bienvenido a Hostal San Jorge. Nos encontramos ubicados a 2 cuadras de la Plaza Principal de Cafayate, en la provincia de Salta, noroeste argentino."
        />
        <meta
          name="keywords"
          content="hostal san jorge, hostal san jorge cafayate, san jorge, san jorge cafayate, alojamiento, Cafayate, Salta, habitaciones, desayuno, comodidades, redes sociales, Wi-Fi, baño privado, ropa de cama, toallas, preguntas frecuentes, cómo llegar, galería"
        />
        <meta name="author" content="Bruno Madozzo Romay" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.hostalsanjorgecafayate.netlify.app/"
        />
        <link rel="icon" href="./src/IMG/favicon.png" />
        <link rel="apple-touch-icon" href="./src/IMG/favicon.png" />
        <meta property="og:title" content="Home | Hostal San Jorge" />
        <meta
          property="og:description"
          content="Bienvenido a Hostal San Jorge. Nos encontramos ubicados a 2 cuadras de la Plaza Principal de Cafayate, en la provincia de Salta, noroeste argentino."
        />
        <meta
          property="og:image"
          content="https://hostalsanjorgecafayate.netlify.app/src/IMG/frente.webp"
        />
        <meta
          property="og:url"
          content="https://hostalsanjorgecafayate.netlify.app/"
        />
        <meta
          name="google-site-verification"
          content="Tkwt-VsZcevf6jFDeu66qgpSh4m_zMuXkBbHXYpDAcU"
        />
        <title>Home | Hostal San Jorge - Alojamiento en Cafayate, Salta</title>
        <link rel="stylesheet" href="./src/styles/estilos.css" />
        <link rel="stylesheet" href="./src/styles/index.css" />
      </Helmet>
      <BannerHome></BannerHome>
      <section className="flex justify-center min-h-[250px] w-[100%] my-10">
        <div className="bg-slate-700 w-[75%] min-h-[200px] text-[#fff] flex gap-24 p-10 rounded-[10px]">
          <div className="w-[75%]">
            <h2 className="lg:text-[45px]">Sobre Nosotros</h2>
            <p className="xl:text-[16px] font-normal text-gray-300">Con más de 15 años brindando alojamiento a nuestros huéspedes, en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal para descansar. Permítanos ser su hogar lejos de casa y disfrute de una experiencia agradable y memorable mientras explora los encantos de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste argentino.</p>
          </div>
          <div className="w-[25%] flex items-center">
            <button className="bg-emerald-400 px-15 p-3 w-[100%] xl:text-[16px]">Leer más</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
