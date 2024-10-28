const FiltrosDetalle = () => {
  return (
    <div className="flex w-[100%] h-[60px] pe-2 filtersDetail md:flex-wrap sm:justify-center vsm:gap-2 md:gap-5">
      <span className="border vsm:min-w-[100px] vsm:h-[40px] vsm:p-2 sm:py-2 sm:px-5 text-gray-600 cursor-pointer hover:bg-gray-200">
        Individual
      </span>
      <span className="border vsm:min-w-[150px] vsm:h-[40px] py-2 px-5 text-gray-600 cursor-pointer hover:bg-gray-200">
        Doble opción 1
      </span>
      <span className="border vsm:min-w-[150px] vsm:h-[40px] py-2 px-5 text-gray-600 cursor-pointer hover:bg-gray-200">
        Doble opción 2
      </span>
      <span className="border vsm:min-w-[100px] vsm:h-[40px] py-2 px-5 text-gray-600 cursor-pointer hover:bg-gray-200">
        Triple
      </span>
      <span className="border vsm:min-w-[120px] vsm:h-[40px] py-2 px-5 text-gray-600 cursor-pointer hover:bg-gray-200">
        Cuádruple
      </span>
      <span className="border vsm:min-w-[120px] vsm:h-[40px] py-2 px-5 text-gray-600 cursor-pointer hover:bg-gray-200">
        Quíntuple
      </span>
    </div>
  );
}

export default FiltrosDetalle;
