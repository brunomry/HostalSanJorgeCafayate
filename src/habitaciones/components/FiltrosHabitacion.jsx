import habitaciones from "../../helpers/habitaciones";

function FiltrosHabitacion({
  habitacionSeleccionada,
  setHabitacionSeleccionada,
  setTipo,
  tipo,
}) {
  const obtenerHabitacion = (habitacion) => {
    const habitacionBuscada = habitaciones.filter((hab) =>
      hab.tipo.includes(habitacion)
    );
    setHabitacionSeleccionada(habitacionBuscada);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-5">
      <span
        title="Todas"
        className={`border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer ${
          habitacionSeleccionada === "" ? "bg-gray-200" : ""
        }`}
        onClick={() => {
          setHabitacionSeleccionada("");
          setTipo("");
        }}
      >
        Todas
      </span>
      <span
        title="Habitación Individuales"
        className={`border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer lg:hover:bg-gray-200 
          ${tipo == "Individual" ? "bg-gray-200" : ""}`}
        onClick={() => {
          obtenerHabitacion("Individual");
          setTipo("Individual");
        }}
      >
        Individual
      </span>
      <span
        title="Habitaciones dobles"
        className={`border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer lg:hover:bg-gray-200 
          ${tipo == "Doble" ? "bg-gray-200" : ""}`}
        onClick={() => {
          obtenerHabitacion("Doble");
          setTipo("Doble");
        }}
      >
        Doble
      </span>
      <span
        title="Habitaciones triples"
        className={`border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer lg:hover:bg-gray-200 
          ${tipo == "Triple" ? "bg-gray-200" : ""}`}
        onClick={() => {
          obtenerHabitacion("Triple");
          setTipo("Triple");
        }}
      >
        Triple
      </span>
      <span
        title="Habitaciones cuádruples"
        className={`border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer lg:hover:bg-gray-200 
          ${tipo == "Cuádruple" ? "bg-gray-200" : ""}`}
        onClick={() => {
          obtenerHabitacion("Cuádruple");
          setTipo("Cuádruple");
        }}
      >
        Cuádruple
      </span>
      <span
        title="Habitaciones quíntuples"
        className={`border py-2 px-5 text-gray-600 lg:hover:text-[#363636] cursor-pointer lg:hover:bg-gray-200 
          ${tipo == "Quíntuple" ? "bg-gray-200" : ""}`}
        onClick={() => {
          obtenerHabitacion("Quíntuple");
          setTipo("Quíntuple");
        }}
      >
        Quíntuple
      </span>
    </div>
  );
}

export default FiltrosHabitacion;
