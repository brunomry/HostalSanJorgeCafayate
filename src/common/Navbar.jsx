import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-white z-50 dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-8">
       

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex text-[18px] text-white flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3  border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000] rounded "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/habitaciones"}
                className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
              >
                Habitaciones
              </Link>
            </li>
            <li>
              <Link
                to={"/nosotros"}
                className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
              >
                Nosotros
              </Link>
            </li>
            <Link
          to={"/"}
          className="flex flex-col items-center space-x-3 rtl:space-x-reverse px-5"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Hostal San Jorge
          </span>
          <small className="text-gray-600">Cafayate</small>
        </Link>
            <li>
              <Link
                to={"/galeria"}
                className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
              >
                Galería
              </Link>
            </li>
            <li>
              <Link
                to={"/contacto"}
                className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
              >
                Idioma
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg py-lg-0 navBar">
    //     <div
    //       className="container-fluid d-flex align-items-center flex-lg-row justify-content-lg-evenly"
    //     >
    //       <Link className="navbar-brand ms-xxl-5" href="${index}index.html" title="Logo de Hostal San Jorge"
    //         >Hostal San Jorge</Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div
    //         className="collapse navbar-collapse my-2 d-lg-flex justify-content-center justify-content-xl-end me-xxl-5"
    //         id="navbarNav"
    //       >
    //         <ul
    //           className="navbar-nav d-flex gap-2 align-items-center justify-content-lg-end gap-xl-4 my-xl-2 lead navigation"
    //         >
    //           <li className="nav-item text-center">
    //             <Link className="nav-link pb-0 pb-sm-2" href="${index}index.html">Home</Link>
    //           </li>
    //           <li className="nav-item text-center">
    //             <Link className="nav-link" href="${rutaPagina}habitaciones/habitaciones.html">Habitaciones</Link>
    //           </li>
    //           <li className="nav-item text-center">
    //             <Link className="nav-link" href="${rutaPagina}galeria/galeria.html">Galería</Link>
    //           </li>
    //           <li className="nav-item text-center">
    //             <Link className="nav-link" href="${rutaPagina}comoLlegar/comoLlegar.html">Cómo Llegar</Link>
    //           </li>
    //           <li className="nav-item text-center">
    //             <Link className="nav-link" href="${rutaPagina}preguntasFrecuentes/preguntasFrecuentes.html"
    //               >Preguntas Frecuentes</a
    //             >
    //           </li>
    //           <li className="nav-item dropdown text-center">
    //             <Link
    //               className="nav-link dropdown-toggle"
    //               to={"/"}
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               <i className="fa-solid fa-globe"></i
    //               ><span className="ms-2">Idioma</span>
    //             </Link>
    //             <ul className="dropdown-menu lead text-center text-lg-start">
    //               <li>
    //                 <Link
    //                   className="dropdown-item text-secondary fw-light"
    //                   to={"/"}
    //                   id="optionEs"
    //                   ><img
    //                     src="../../IMG/argentina.webp"
    //                     className="ms-3 ms-lg-0"
    //                     alt="bandera de Argentina"
    //                     title="Idioma Español"
    //                   />
    //                   Español</a
    //                 >
    //               </li>
    //               <li>
    //                 <Link
    //                   className="dropdown-item text-secondary fw-light"
    //                   to={"/"}
    //                   id="optionEn"
    //                   ><img
    //                     src="../../IMG/ingles.webp"
    //                     alt="bandera de Inglaterra"
    //                     title="Idioma Inglés"
    //                   />
    //                   Inglés</a
    //                 >
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
  );
};

export default Navbar;
