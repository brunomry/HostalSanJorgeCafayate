import { comodidadesEs } from "./comodidadesEs";
import { comodidadesEn } from "./comodidadesEn";
import faqsEn from "./faqsEn";
import faqsEs from "./faqsEs";
import politicasEn from "./politicasEn";
import politicasEs from "./politicasEs";

export const traducciones={
    "es": {
      "navbar": {
        "habitaciones":"Habitaciones",
        "nosotros": "Nosotros",
        "contacto":"Contacto",
        "galeria":"Galería",
      },
      "footer": {
        "redes":"Síguenos en nuestras redes",
        "contacto": "Contacto",
        "info": {
          "title":"Información",
          "politicas":"Políticas del hostal",
          "faqs":"Preguntas frecuentes",
          "nosotros":"Sobre Nosotros"
        },
        "colaboraciones":{
          "title":"Colaboraciones",
          "ph": "Fotografía",
          "traducciones":"Traducciones"
        },
        "derechos":{
          "derechos": "Todos los derechos reservados.",
          "autor": "Desarrollado por"
        }
      },
      "btnWpp": "Reserva ahora",
      "paginaHome":{
        "seccionBanner": {
          "ubicacion":"Provincia de Salta, Noroeste argentino",
          "descripcion":"Tu lugar ideal para descansar y pasar tus vacaciones.",
          "btnHabitaciones": "Nuestras habitaciones",
          "cercania":"Estamos a 2 cuadras de la plaza principal"
        },
        "seccionResenas": {
          "btn": "Ver reseñas en Google"
        },
        "seccionNosotros":{
          "title":"Sobre Nosotros",
          "descripcion1": "Con más de 15 años brindando alojamiento a nuestros huéspedes, en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal para descansar.",
          "descripcion2": "Permítanos ser su hogar lejos de casa y disfrute de una experiencia agradable y memorable mientras explora los encantos de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste argentino.",
          "btn": "Leer más"
        },
        "seccionHabitaciones": {
          "title":"Nuestras Habitaciones",
          "descripcion": "Ofrecemos habitaciones privadas diseñadas para su comodidad y tranquilidad, que van desde simples hasta quíntuples.",
          "subtitulo":"Comodidades y Servicios",
          "comodidades": [...comodidadesEs],
          "btn": "Ver Habitaciones"
        },
        "btnVerMas": "Ver más"  
      },
      "paginaHabitaciones":{
        "title":"Nuestras Habitaciones",
        "descripcion": "Descubre el encanto y la comodidad de nuestras habitaciones. Cada espacio fue diseñado pensando en tu confort.",
        "descripcionFiltro":"Puedes seleccionar la habitación que estés buscando",
        "btnCard": "Más información"
      }, 
      "paginaNosotros":{
        "title":"Sobre nosotros",
        "descripcion1": "Con más de 15 años brindando alojamiento a nuestros huéspedes, en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal para descansar. Permítanos ser su hogar lejos de casa y disfrute de una experiencia agradable y memorable mientras explora los encantos de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste argentino.",
        "subtitulo": "Nuestra historia",
        "descripcion2": "El Hostal San Jorge comenzó su camino como un proyecto familiar con la visión de ofrecer a turistas y viajeros un espacio donde relajarse después de explorar los maravillosos paisajes de Cafayate. A lo largo de los años, nos hemos convertido en una opción preferida para aquellos que buscan un ambiente tranquilo, cálido y acogedor, manteniendo siempre una atención personalizada que nos diferencia.",
        "apertura":"Hostal San Jorge abrió sus puertas en el año 2008.",
        "subtitulo1": "Misión",
        "descripcion3": "Nuestra misión es ofrecer a nuestros huéspedes un lugar cómodo, tranquilo e ideal para descansar, comprometidos a brindar una experiencia única y agradable, donde puedan sentirse como en casa mientras exploran la cultura local.",
        "subtitulo2": "Visión",
        "descripcion4": "Nuestra visión es ser un hostal de referencia en la ciudad, reconocido por nuestra hospitalidad, siendo un lugar donde cada huésped se sienta cómodo y seguro, asegurando que en el futuro nos elijan nuevamente.",
        "subtitulo3": "Valores",
        "descripcion5": ["Hospitalidad: Nos enorgullecemos de hacer sentir a nuestros huéspedes como en casa, brindando un trato personalizado y cordial",
          "Calidad: Mantenemos altos estándares de limpieza, confort y atención para asegurar que su estadía sea inmejorable",
          "Compromiso: Estamos comprometidos con el bienestar de nuestros huéspedes, haciendo todo lo posible para superar sus expectativas"],
      },
      "paginaGaleria":{
        "title":"Galería",
        "descripcion": "¡Conoce nuestras instalaciones y habitaciones a través de nuestra galería de imágenes!",
      },
      "paginaContacto":{
        "title":"Contáctanos",
        "descripcion1":"Nos encontramos ubicados a 2 cuadras de la plaza principal de Cafayate.",
        "descripcion2": "Encuéntranos con Google Maps",
        "direccion": "Calixto Mamaní 105, Cafayate, Provincia de Salta, Argentina",
        "whatsApp": "WhatsApp",
        "telefonoFijo": "Teléfono fijo",
        "formulario": {
          "title": "Déjanos tu consulta",
          "nombre": "Nombre y Apellido",
          "email": "Correo electrónico",
          "telefono": "Teléfono",
          "mensaje": "Mensaje",
          "btnEnviar": "Enviar"
        }
      },
      "paginaFaqs":{
        "title":"Preguntas frecuentes",
        "descripcion": "Consultá las preguntas más frecuentes de nuestros huéspedes.",
        "faqs": [
          ...faqsEs
        ]
      },
      "paginaPoliticas":{
        "title":"Políticas del Hostal",
        "descripcion":"A continuación, te presentamos nuestras políticas generales para asegurar una estadía cómoda y segura en el hostal.",
        "politicas": [
          ...politicasEs
        ]
      },
      "paginaDetalle":{
        "filtros":{
          "individual": "Individual",
          "doble1": "Doble opción 1",
          "doble2": "Doble opción 2",
          "triple": "Triple",
          "cuadruple": "Cuádruple",
          "quintuple": "Quíntuple"
        },
        "capacidad":"Capacidad máxima para",
        "subtitulo":"Comodidades",
        "btnReservar":"Reservar",
        "checkin":"a partir de las 02:00 hasta 00:00",
        "checkout":"hasta 10 am",
        "estadia":"La estadía incluye Desayuno",
        "horarioDesayuno":"8:30 a 09:45 am (sin excepción)",
        "mediosPago": "Además de efectivo, aceptamos transferencias bancarias y también puedes abonar a través de link de mercadopago proporcionado por nosotros donde podrás utilizar tu tarjeta de débito/crédito. Esta última opción tiene un 10% de recargo.",
        "Individual": {
          "nombre": "Habitación Individual",
          "precio": "15.000",
          "descripcion_breve": "Habitación simple de 4 m2 con cama individual",
          "descripcion_amplia": "Esta acogedora habitación de 4 metros cuadrados con cama individual incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima de 1 huésped.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Doble opción 1": {
          "nombre": "Habitación Doble",
          "precio": "35.000",
          "descripcion_breve": "Habitación doble de 9 m2 con cama matrimonial",
          "descripcion_amplia": "Esta cómoda y luminosa habitación de 9 metros cuadrados cuenta con 1 cama matrimonial e incluye comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador, ventilador, armario y un mini balcón. Cuenta con una capacidad máxima de 2 huéspedes.",
          "comodidades": ["Wi-Fi", "Aire acondicionado", "Balcón","Armario", "Ropa de cama", "Sommier","Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Doble opción 2": {
          "nombre": "Habitación Doble",
          "precio": "35.000",
          "descripcion_breve": "Habitación doble de 9 m2 con cama matrimonial",
          "descripcion_amplia": "Esta cómoda y luminosa habitación de 9 metros cuadrados cuenta con 1 cama matrimonial e incluye comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador, ventilador, armario y un mini balcón. Cuenta con una capacidad máxima de 2 huéspedes.",
          "comodidades": ["Wi-Fi", "Aire acondicionado", "Balcón","Armario", "Ropa de cama", "Sommier","Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Triple": {
          "nombre": "Habitación Triple",
          "precio": "45.000",
          "descripcion_breve": "Habitación triple de 10 m2 con cama matrimonial e individual.",
          "descripcion_amplia": "Esta habitación cuenta con 1 cama matrimonial y 1 cama individual. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima de 3 huéspedes.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Armario", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Cuádruple": {
          "nombre": "Habitación Cuádruple",
          "precio": "60.000",
          "descripcion_breve": "Habitación cuádruple de 11 m2 con cama matrimonial y 2 camas individuales.",
          "descripcion_amplia": "Esta amplia y cómoda habitación de 12 metros cuadrados cuenta con cama matrimonial y 2 cama individuales. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima para 4 huéspedes.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Quíntuple": {
          "nombre": "Habitación Quíntuple",
          "precio": "75.000",
          "descripcion_breve": "Habitación quíntuple de 12 m2 con cama matrimonial, cama cucheta y cama individual",
          "descripcion_amplia": "Esta amplia y cómoda habitación de 12 metros cuadrados cuenta con cama matrimonial, cama individual y cama cucheta. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima para 5 huéspedes.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        }
      },
    },
    "en": {
      "navbar": {
        "habitaciones":"Rooms",
        "nosotros": "About us",
        "contacto":"Contact",
        "galeria":"Gallery",
      },
      "footer": {
        "redes":"Follow us on our networks",
        "contacto":"Contact",
        "info": {
          "title":"Information",
          "politicas":"Hostal Policies",
          "faqs":"Faqs",
          "nosotros":"About us"
        },
        "colaboraciones":{
          "title":"Collaborations",
          "ph": "Photograph",
          "traducciones":"Translations"
        },
        "derechos":{
          "derechos": "All rights reserved.",
          "autor": "Developed by"
        }
      },
      "btnWpp": "Reserve now",
      "paginaHome":{
        "seccionBanner": {
          "ubicacion":"Salta province, Argentinian north-west",
          "descripcion":"",
          "btnHabitaciones": "Our Rooms",
          "cercania":""
        },
        "seccionResenas": {
          "btn": "See reviews on Google"
        },
        "seccionNosotros":{
          "title":"About us",
          "descripcion1": "With more than 15 years providing accommodation to our guests, at Hostal San Jorge we offer you a comfortable, quiet and ideal place to rest.",
          "descripcion2": "Permit us be your home away and enjoy a greate and memorable experience, while you explore the charms of the beautiful Cafayate city, Salta province, Argentinian north-west.",
          "btn": "See more"
        },
        "seccionHabitaciones": {
          "title":"Our Rooms",
          "descripcion": "We offer private rooms designed for your comfort and peace, ranging from single to quintuple.",
          "subtitulo":"Amenities and Services",
          "comodidades": [...comodidadesEn],
          "btn": "See Rooms"
        },  
        "btnVerMas": "See more"  
      },
      "paginaHabitaciones":{
        "title":"Our Rooms",
        "descripcion": "Discover the charm and comfort of our rooms. Each space was designed thinking about your comfort.",
        "descripcionFiltro":"",
        "btnCard": "More Information"
      }, 
      "paginaNosotros":{
        "title":"About us",
        "descripcion1": "With more than 15 years providing accommodation to our guests, at Hostal San Jorge we offer you a comfortable, quiet and ideal place to rest. Permit us be your home away and enjoy a greate and memorable experience, while you explore the charms of the beautiful Cafayate city, Salta province, Argentinian north-west.",
        "subtitulo": "Our history",
        "descripcion2": "",
        "apertura":"",
        "subtitulo1": "Mission",
        "descripcion3": "",
        "subtitulo2": "Vision",
        "descripcion4": "",
        "subtitulo3": "Values",
        "descripcion5": ["1",
          "2",
          "3"],
      },
      "paginaGaleria":{
        "title":"Gallery",
        "descripcion": "¡Get to know our facilities and rooms through our image gallery!",
      },
      "paginaContacto":{
        "title":"Contact us",
        "descripcion1":"",
        "descripcion2": "Find us with Google Maps",
        "direccion": "Calixto Mamaní 105, Cafayate, Salta, Argentina",
        "whatsApp": "WhatsApp",
        "telefonoFijo": "",
        "formulario": {
          "title": "",
          "nombre": "Name and Surname:",
          "email": "Email",
          "telefono": "Telephone",
          "mensaje": "Message",
          "btnEnviar": "Submit"
        }
      },
      "paginaFaqs":{
        "title":"Faqs",
        "descripcion": "Check out the most frequently asked questions from our guests.",
        "faqs": [
          ...faqsEn
        ]
      },
      "paginaPoliticas":{
        "title":"Políticas del Hostal",
        "descripcion":"",
        "politicas": [
          ...politicasEn
        ]
      },
      "paginaDetalle":{
        "filtros":{
          "individual": "Single",
          "doble1": "Double option 1",
          "doble2": "Double option 2",
          "triple": "Triple",
          "cuadruple": "Cuadruple",
          "quintuple": "Quintuple"
        },
        "capacidad":"Capacidad máxima para",
        "subtitulo":"Amenities",
        "btnReservar":"Reserve",
        "checkin":"",
        "checkout":"",
        "estadia":"",
        "horarioDesayuno":"8:30 a 09:45 am ",
        "mediosPago": "",
        "Individual": {
          "nombre": "Single Room",
          "precio": "15.000",
          "descripcion_breve": "",
          "descripcion_amplia": "This cozy room features a single bed for a single person and amenities such as Wi-Fi, private bathroom, linens, towels, toiletries and ceiling fan.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Doble opción 1": {
          "nombre": "Double Room",
          "precio": "35.000",
          "descripcion_breve": "",
          "descripcion_amplia": "",
          "comodidades": ["Wi-Fi", "Aire acondicionado", "Balcón","Armario", "Ropa de cama", "Sommier","Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Doble opción 2": {
          "nombre": "Double Room",
          "precio": "35.000",
          "descripcion_breve": "",
          "descripcion_amplia": "",
          "comodidades": ["Wi-Fi", "Aire acondicionado", "Balcón","Armario", "Ropa de cama", "Sommier","Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Triple": {
          "nombre": "Triple Room",
          "precio": "45.000",
          "descripcion_breve": "",
          "descripcion_amplia": "",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Armario", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Cuádruple": {
          "nombre": "Cuadruple Room",
          "precio": "60.000",
          "descripcion_breve": "",
          "descripcion_amplia": "",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Quíntuple": {
          "nombre": "Quintuple Room",
          "precio": "75.000",
          "descripcion_breve": "",
          "descripcion_amplia": "",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        }
      },
    },
  };  