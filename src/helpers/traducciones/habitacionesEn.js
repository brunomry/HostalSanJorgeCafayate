import simple from "../../assets/IMG/Habitaciones/HabitacionSimple/hab8.webp";
import simple2 from "../../assets/IMG/Habitaciones/HabitacionSimple/bañoSimple (1).webp";
import simple3 from "../../assets/IMG/Habitaciones/HabitacionSimple/bañoSimple (2).webp";
import doble7 from "../../assets/IMG/Habitaciones/HabitacionDoble/hd1.jpeg";
import doble7_1 from "../../assets/IMG/Habitaciones/HabitacionDoble/hab7.webp";
import doble6 from "../../assets/IMG/Habitaciones/HabitacionDoble/hab6 (1).webp";
import doble6_1 from "../../assets/IMG/Habitaciones/HabitacionDoble/bañoHab6 (1).webp";
import doble6_2 from "../../assets/IMG/Habitaciones/HabitacionDoble/hab6 (3).webp";
import triple from "../../assets/IMG/Habitaciones/HabitacionTriple/hab5.webp";
import triple1 from "../../assets/IMG/Habitaciones/HabitacionTriple/baño5 (1).webp";
import triple2 from "../../assets/IMG/Habitaciones/HabitacionTriple/baño5 (2).webp";
import cuadruple from "../../assets/IMG/habitacion4.webp";
import quintuple from "../../assets/IMG/Habitaciones/HabitacionQuintuple/hab4 (1).webp";
import quintuple1 from "../../assets/IMG/Habitaciones/HabitacionQuintuple/bañoHab4 (1).webp";
import quintuple2 from "../../assets/IMG/Habitaciones/HabitacionQuintuple/bañoHab4 (2).webp";

const habitacionesEn = [
    {
        id: 8,
        imagenes: [simple, simple2, simple3],
        nombre: "Single Room",
        precio: "15.000",
        tipo: "Single",
        descripcion_breve: "Single room 4 m\u00B2 single bed",
        descripcion_amplia: "This cozy 4 square meter room with single bed includes amenities such as Wi-Fi, private bathroom, bed linens, towels, toiletries and seiling fan. It has a maximum capacity of 1 guest.",
        capacidad: "1 people",
        comodidades: ["Wi-Fi", "Linens", "Towels", "Private bathroom", "Toiletries", "Ceiling fan", "Stove", "Shower", "Hot water", "Breakfast included", "Chairs"]    
      },
      {
        id: 6,
        imagenes:[doble6,doble6_1, doble6_2],
        nombre: "Double Room",
        precio: "35.000",
        tipo: "Double option 1",
        descripcion_breve: "9 m\u00B2 double room with double bed",
        descripcion_amplia: "This comfortable and luminous 9 square meter room has 1 double bed and includes amenities such as Wi-Fi, air conditioning, private bathroom, linens, towels, toiletries, seiling fan, closet and a mini balcony. It has a maximum capacity of 2 guests.",
        capacidad: "2 peoples",
        comodidades: ["Wi-Fi", "Air conditioner", "Balcony", "cupboard", "Linens", "Sommier", "Towels", "Private bathroom", "Toiletries", "Ceiling fan", "Stove", "Shower", "Hot water", "Breakfast included", "Chairs"]    
      },
      {
        id: 7,
        imagenes: [doble7, doble7_1, doble6_1],
        nombre: "Double Room",
        precio: "35.000",
        tipo: "Double option 2",
        descripcion_breve: "9 m\u00B2 double room with double bed",
        descripcion_amplia: "This comfortable and luminous 9 square meter room has 1 double bed and includes amenities such as Wi-Fi, air conditioning, private bathroom, linens, towels, toiletries, seiling fan, closet and a mini balcony. It has a maximum capacity of 2 guests.",
        capacidad: "2 peoples",
        comodidades: ["Wi-Fi", "Air conditioner", "Balcony", "cupboard", "Linens", "Towels", "Private bathroom", "Toiletries", "Ceiling fan", "Stove", "Shower", "Hot water", "Breakfast included", "Chairs"]  
      },
      {
        id: 5,
        imagenes: [triple, triple1, triple2],
        nombre: "Triple Room",
        precio: "50.000",
        tipo: "Triple",
        descripcion_breve: "Triple room of 10 m\u00B2 with a double bed and a single bed.",
        descripcion_amplia: "This room has 1 double bed and 1 single bed. It includes amenities such as Wi-Fi, private bathroom, bed linen, towels, toiletries and seiling fan. It has a maximum capacity of 3 guests.",
        capacidad: "3 peoples",
        comodidades: ["Wi-Fi", "Linens", "Towels", "Private bathroom", "Toiletries", "Ceiling fan",  "cupboard", "Stove", "Shower", "Hot water", "Breakfast included", "Chairs"]    
      },
      {
        id: 3,
        imagenes: [cuadruple, quintuple1, quintuple2],
        nombre: "Cuadruple Room",
        precio: "60.000",
        tipo: "Cuadruple",
        descripcion_breve: "Quadruple room of 14 m\u00B2 with double bed and 2 single beds.",
        descripcion_amplia: "This spacious and comfortable room of 14 square meters has a double bed and 2 single beds. It includes amenities such as Wi-Fi, private bathroom, bed linen, towels, toiletries and seiling fan. It has a maximum capacity of 4 guests.",
        capacidad: "4 peoples",
        comodidades: ["Wi-Fi", "Linens", "Towels", "Private bathroom", "Toiletries", "Ceiling fan", "cupboard", "Mesa pequeña", "Stove", "Shower", "Hot water", "Breakfast included", "Chairs"]    
      },
      {
        id: 4,
        imagenes: [quintuple, quintuple1, quintuple2],
        nombre: "Quintuple Room",
        precio: "70.000",
        tipo: "Quintuple",
        descripcion_breve: "14 m\u00B2 quintuple room with double bed, bunk bed and single bed.",
        descripcion_amplia: "This spacious and comfortable 14 m\u00B2 room has a double bed, a single bed and a bunk bed. It includes amenities such as Wi-Fi, private bathroom, bed linen, towels, toiletries and seiling fan. It has a maximum capacity of 5 guests.",
        capacidad: "5 peoples",
        comodidades: ["Wi-Fi", "Linens", "Towels", "Private bathroom", "Toiletries", "Ceiling fan", "cupboard", "Mesa pequeña", "Stove", "Shower", "Hot water","Breakfast included", "Chairs"]    
      },     
]

export default habitacionesEn;