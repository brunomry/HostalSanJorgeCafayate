function FiltrosHabitacion({
  habitacionSeleccionada,
  setHabitacionSeleccionada,
  setTipo,
  tipo,
  traduccion,
}) {

  const obtenerHabitacion = (habitacion) => {
    const habitacionBuscada = traduccion.habitaciones.filter((hab) =>
      hab.tipo.includes(habitacion)
    );
    setHabitacionSeleccionada(habitacionBuscada);
  };

  const manejarClick = (tipoHabitacion) => {
    if (tipoHabitacion === "Todas") {
      setHabitacionSeleccionada("");
      setTipo("");
    } else {
      obtenerHabitacion(tipoHabitacion);
      setTipo(tipoHabitacion);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-5">
      {traduccion.paginaHabitaciones.filtros.map((tipoHabitacion) => (
        <span
          key={tipoHabitacion}
          title={`Habitaciones ${tipoHabitacion}`}
          className={`border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer bg-[#fff] shadow-md lg:hover:bg-gray-200 3xl:text-[1.2rem] 
            ${
              tipo === tipoHabitacion || 
              (tipoHabitacion === "Todas" && habitacionSeleccionada === "") 
                ? "bg-gray-200" 
                : ""
            }`}
          onClick={() => manejarClick(tipoHabitacion)}
        >
          {tipoHabitacion}
        </span>
      ))}
    </div>
  );
}

export default FiltrosHabitacion;
