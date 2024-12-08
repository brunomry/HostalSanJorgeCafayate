import simple from "../assets/IMG/Habitaciones/HabitacionSimple/hab8.webp";
import simple2 from "../assets/IMG/Habitaciones/HabitacionSimple/bañoSimple (1).webp";
import simple3 from "../assets/IMG/Habitaciones/HabitacionSimple/bañoSimple (2).webp";
import doble7 from "../assets/IMG/Habitaciones/HabitacionDoble/hd1.jpeg";
import doble7_1 from "../assets/IMG/Habitaciones/HabitacionDoble/hab7.webp";
import doble6 from "../assets/IMG/Habitaciones/HabitacionDoble/hab6 (1).webp";
import doble6_1 from "../assets/IMG/Habitaciones/HabitacionDoble/bañoHab6 (1).webp";
import doble6_2 from "../assets/IMG/Habitaciones/HabitacionDoble/hab6 (3).webp";
import triple from "../assets/IMG/Habitaciones/HabitacionTriple/hab5.webp";
import triple1 from "../assets/IMG/Habitaciones/HabitacionTriple/baño5 (1).webp";
import triple2 from "../assets/IMG/Habitaciones/HabitacionTriple/baño5 (2).webp";
import cuadruple from "../assets/IMG/habitacion4.webp";
import quintuple from "../assets/IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp";
import quintuple1 from "../assets/IMG/Habitaciones/HabitacionQuintuple/bañoHab4 (1).webp";
import quintuple2 from "../assets/IMG/Habitaciones/HabitacionQuintuple/bañoHab4 (2).webp";


const habitaciones = [
    {
        id: 8,
        imagenes: [simple, simple2, simple3],
        // img1: simple,
        // img2: simple2,
        // img3: simple3,
        nombre: "Habitación Individual",
        precio: 14000,
        tipo: "Individual",
        descripcion_breve: "Habitación simple de 4 m2 con cama individual",
        descripcion_amplia: "Esta acogedora habitación de 4 metros cuadrados con cama individual incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima de 1 huésped.",
        capacidad: 1,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido"]    
      },
      {
        id: 6,
        imagenes:[doble6,doble6_1, doble6_2],
        // img1: doble6,
        // img2: doble6_1,
        // img3: doble6_2,
        nombre: "Habitación Doble",
        precio: 30000,
        tipo: "Doble opción 1",
        descripcion_breve: "Habitación doble de 9 m2 con cama matrimonial",
        descripcion_amplia: "Esta cómoda y luminosa habitación de 9 metros cuadrados cuenta con 1 cama matrimonial e incluye comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador, ventilador, armario y un mini balcón. Cuenta con una capacidad máxima de 2 huéspedes.",
        capacidad: 2,
        comodidades: ["Wi-Fi", "Aire acondicionado", "Balcón", "Armario", "Ropa de cama", "Sommier", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido"]    
      },
      {
        id: 7,
        imagenes: [doble7, doble7_1, doble6_1],
        // img1: doble7,
        // img2: doble7_1,
        // img3: doble6_1,
        nombre: "Habitación Doble",
        precio: 30000,
        tipo: "Doble opción 2",
        descripcion_breve: "Habitación doble de 9 m2 con cama matrimonial",
        descripcion_amplia: "Esta habitación cuenta con 1 cama matrimonial para 2 personas y comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador, ventilador, armario y un mini balcón. Cuenta con una capacidad máxima de 2 huéspedes.",
        capacidad: 2,
        comodidades: ["Wi-Fi", "Aire acondicionado", "Balcón", "Armario", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido"]  
      },
      {
        id: 5,
        imagenes: [triple, triple1, triple2],
        // img1: triple,
        // img2: triple1,
        // img3: triple2,
        nombre: "Habitación Triple",
        precio: 42000,
        tipo: "Triple",
        descripcion_breve: "Habitación triple de 10 m2 con cama matrimonial e individual",
        descripcion_amplia: "Esta habitación cuenta con 1 cama matrimonial y 1 cama individual. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima de 3 huéspedes.",
        capacidad: 3,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador",  "Armario", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido"]    
      },
      {
        id: 3,
        imagenes: [cuadruple, quintuple1, quintuple2],
        // img1: cuadruple,
        // img2: quintuple1,
        // img3: quintuple2,
        nombre: "Habitación Cuádruple",
        precio: 56000,
        tipo: "Cuádruple",
        descripcion_breve: "Habitación cuádruple de 11 m2 con cama matrimonial y 2 camas individuales",
        descripcion_amplia: "Esta amplia y cómoda habitación de 11 metros cuadrados cuenta con cama matrimonial, cama individual y cama cucheta. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima para 4 huéspedes.",
        capacidad: 4,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Armario", "Mesa pequeña", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido"]    
      },
      {
        id: 4,
        imagenes: [quintuple, quintuple1, quintuple2],
        // img1: quintuple,
        // img2: quintuple1,
        // img3: quintuple2,
        nombre: "Habitación Quíntuple",
        precio: 70000,
        tipo: "Quíntuple",
        descripcion_breve: "Habitación quíntuple de 11 m2 con cama matrimonial, cama individual y cama cucheta",
        descripcion_amplia: "Esta amplia y cómoda habitación de 11 metros cuadrados cuenta con cama matrimonial, cama individual y cama cucheta. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima para 5 huéspedes.",
        capacidad: 5,
        comodidades: ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Armario", "Mesa pequeña", "Estufa", "Ducha", "Agua caliente","Desayuno incluido"]    
      },     
]

export default habitaciones;