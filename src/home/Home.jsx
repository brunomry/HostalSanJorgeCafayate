import { Helmet } from "react-helmet";
import "./styles/home.css";
import BannerHome from "./components/BannerHome";
import Comentarios from "./components/Comentarios";
import NosotrosHome from "./components/NosotrosHome";
import HabitacionesHome from "./components/HabitacionesHome";
import Faqs from "../faqs/Faqs";
import BtnWhatsApp from "../common/BtnWhatsApp";

function Home() {
  return (
    <main className="">
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
      <Comentarios></Comentarios>
      <NosotrosHome></NosotrosHome>
      <HabitacionesHome></HabitacionesHome>
      <Faqs></Faqs>
      <BtnWhatsApp></BtnWhatsApp>
    </main>
  );
}

export default Home;
