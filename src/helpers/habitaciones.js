import simple from "../assets/IMG/Habitaciones/HabitacionSimple/hab8.webp";
import doble7 from "../assets/IMG/Habitaciones/HabitacionDoble/hd1.jpeg";
import doble6 from "../assets/IMG/Habitaciones/HabitacionDoble/hab6 (1).webp";
import triple from "../assets/IMG/Habitaciones/HabitacionTriple/hab5.webp";
import cuadruple from "../assets/IMG/habitacion4.webp";
import quintuple from "../assets/IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp";

const habitaciones = [
    {
        id: 8,
        imagenes: [simple, ],
        tipo: "Habitación Individual",
        descripcion_breve: "Habitación simple con cama individual",
        descripcion_amplia: "Esta acogedora habitación cuenta con 1 cama individual para una sola persona y comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador de techo.",
        capacidad: 1,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa"]    
      },
      {
        id: 6,
        imagenes: [doble6],
        tipo: "Habitación Doble",
        descripcion_breve: "Habitación doble con cama matrimonial",
        descripcion_amplia: "Esta habitación cuenta con 1 cama matrimonial para 2 personas y comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador y ventilador de techo. Además cuenta con un mini balcón.",
        capacidad: 2,
        comodidades: ["Wi-Fi", "Aire acondicionado", "Balcón", "Armario", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa"]    
      },
      {
        id: 7,
        imagenes: [doble7],
        tipo: "Habitación Doble",
        descripcion_breve: "Habitación doble con cama matrimonial",
        descripcion_amplia: "Esta habitación cuenta con 1 cama matrimonial para 2 personas y comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador y ventilador de techo. Además cuenta con un mini balcón.",
        capacidad: 2,
        comodidades: ["Wi-Fi", "Aire acondicionado", "Balcón", "Armario", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa"]  
      },
      {
        id: 5,
        imagenes: [triple],
        tipo: "Habitación Triple",
        descripcion_breve: "Habitación triple con cama matrimonial e individual",
        descripcion_amplia: "Esta habitación para 3 personas cuenta con 1 cama matrimonial y 1 cama individual. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador de techo.",
        capacidad: 3,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa"]    
      },
      {
        id: 3,
        imagenes: [cuadruple],
        tipo: "Habitación Cuádruple",
        descripcion_breve: "Habitación quíntuple con cama matrimonial y 2 camas individuales",
        descripcion_amplia: "Esta amplia y cómoda habitación para 5 personas cuenta con 1 cama matrimonial, 1 cama individual y 1 cama cucheta. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador de techo.",
        capacidad: 4,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa"]    
      },
      {
        id: 4,
        imagenes: [quintuple],
        tipo: "Habitación Quíntuple",
        descripcion_breve: "Habitación quíntuple con cama matrimonial, cama individual y cama cucheta",
        descripcion_amplia: "Esta amplia y cómoda habitación para 5 personas cuenta con 1 cama matrimonial, 1 cama individual y 1 cama cucheta. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador de techo.",
        capacidad: 5,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa"]    
      },     
]

export default habitaciones;