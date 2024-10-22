import { Link } from "react-router-dom";

function BreadcrumbDetalle({ habitacion }) {
  return (
    <nav class="flex px-5 pt-3 text-gray-700" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <Link
            to={"/"}
            class="inline-flex items-center hover:text-gray-700 text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              to={"/habitaciones"}
              class="ms-1 hover:text-gray-700 text-blue-500 md:ms-2 "
            >
              Habitaciones
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="ms-1 text-gray-500 md:ms-2 ">{habitacion.tipo}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default BreadcrumbDetalle;
