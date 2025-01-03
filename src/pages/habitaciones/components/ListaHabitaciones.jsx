import CardHabitacion from "./CardHabitacion";

function ListaHabitaciones({
  listaHabitaciones,
  habitacionSeleccionada,
  traduccion,
}) {
  return (
    <div className="flex gap-4 containerRooms w-[100%] md:min-h-[525px] sm:h-[initial] sm:px-4 sm:grid sm:grid-cols-2 xl:grid-cols-3  mt-10 md:gap-5 lg:gap-10 xl:justify-center xl:items-center 3xl:grid-cols-4">
      {habitacionSeleccionada == "" &&
        listaHabitaciones.map((habitacion) => (
          <CardHabitacion
            key={habitacion.id}
            habitacion={habitacion}
            traduccion={traduccion}
          ></CardHabitacion>
        ))}
      {habitacionSeleccionada != "" &&
        habitacionSeleccionada.map((habitacion) => (
          <CardHabitacion
            key={habitacion.id}
            habitacion={habitacion}
            traduccion={traduccion}
          ></CardHabitacion>
        ))}
    </div>
  );
}

export default ListaHabitaciones;
