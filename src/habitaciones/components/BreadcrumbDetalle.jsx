import { Link } from "react-router-dom";

function BreadcrumbDetalle({ habitacion }) {
  return (
    <nav className="flex flex-wrap pt-3 text-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to={"/"}
            className="inline-flex items-center hover:text-gray-700 text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              to={"/habitaciones"}
              className="ms-1 hover:text-gray-700 text-blue-500 md:ms-2 "
            >
              Habitaciones
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-gray-500 md:ms-2 ">{habitacion.tipo}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default BreadcrumbDetalle;
