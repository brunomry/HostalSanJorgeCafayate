function Alerta({ mensaje, tipo }) {
  return (
    <div
      className={`w-full mb-3 p-3 rounded border ${
        tipo === "success"
          ? "bg-green-100 text-green-600 border-green-400"
          : "bg-red-100 text-red-600 border-red-400"
      }`}
    >
      {mensaje}
    </div>
  );
}

export default Alerta;
