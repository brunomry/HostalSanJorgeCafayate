import habitacionesEs from "./min/habitacionesEs.min";
import habitacionesEn from "./min/habitacionesEn.min";
import { comodidadesEs } from "./min/comodidadesEs.min";
import { comodidadesEn } from "./min/comodidadesEn.min";
import { politicasEs } from "./min/politicasEs.min";
import { politicasEn } from "./min/politicasEn.min";
import { faqsEs } from "./min/faqsEs.min";
import { faqsEn } from "./min/faqsEn.min";

export const traducciones={
    "es": {
      "hostal":"Hostal San Jorge Cafayate",
      "navbar": {
        "habitaciones":"Habitaciones",
        "nosotros": "Nosotros",
        "contacto":"Contacto",
        "galeria":"Galería",
        "reserva": "Solicitud de reserva",
      },
      "footer": {
        "redes":"Síguenos en nuestras redes",
        "contacto": "Contacto",
        "info": {
          "title":"Información",
          "booking":"Perfil en Booking",
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
          "comodidades": [ ...comodidadesEs ],
          "btn": "Ver Habitaciones"
        },
        "btnVerMas": "Ver más"  
      },
      "paginaHabitaciones":{
        "title":"Nuestras Habitaciones",
        "descripcion": "Descubre el encanto y la comodidad de nuestras habitaciones. Cada espacio fue diseñado pensando en tu confort.",
        "descripcionFiltro":"Puedes seleccionar la habitación que estés buscando",
        "btnCard": "Más información",
        "filtros":[
          "Todas",
          "Individual",
          "Doble",
          "Triple",
          "Cuádruple",
          "Quíntuple"
        ],
        "nota":"NOTA: Tarifas aplicables del 1 al 6 de Enero de 2025. Consultar tarifas para otras fechas."
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
        "direccion": "Dirección",
        "whatsApp": "WhatsApp",
        "telefono": "Teléfono fijo",
        "formulario": {
          "title": "Déjanos tu consulta",
          "nombre": "Nombre y Apellido",
          "email": "Correo electrónico",
          "telefono": "Teléfono",
          "mensaje": "Mensaje",
          "textarea":"Hola quería consultar sobre...",
          "btnEnviar": "Enviar"
        }
      },
      "paginaReserva":{
        "title":"Envía tu consulta para reservar",
        "descripcion": "Completa el formulario con tus datos y fechas de estadía, y en breve nos pondremos en contacto.",
        "formulario": {
          "nombre": "Nombre y apellido",
          "email": "Email",
          "telefono": "Teléfono",
          "adultos":"Adultos",
          "menores":"Menores",
          "llegada":"Fecha de Check-In",
          "salida":"Fecha de Check-Out",
          "mensaje": "Mensaje",
          "textarea":"Hola quería consultar sobre...",
          "btnEnviar": "Enviar consulta"
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
        "tarifaActual":"Tarifa del 1 al 6 de Enero 2025",
        "capacidad":"Capacidad máxima para",
        "subtitulo1":"Comodidades",
        "btnReservar":"Reservar",
        "subtitulo2":"Más información",
        "checkin":"disponible a partir de las 02:00 hasta 00:00",
        "checkout":"hasta 10 am",
        "estadia":"La estadía incluye Desayuno",
        "horarioDesayuno":"Horario Desayuno: 8:30 a 09:45 am (sin excepción)",
        "subtitulo3": "Formas de pago",
        "mediosPago": "Además de efectivo, aceptamos transferencias bancarias y también puedes abonar a través de link de mercadopago proporcionado por nosotros donde podrás utilizar tu tarjeta de débito/crédito. Esta última opción tiene un 10% de recargo.",
        "nota":"NOTA: Tarifa aplicable del 1 al 7 de Enero de 2025. Consultar tarifa para otras fechas."
      },
      "habitaciones": [
        ...habitacionesEs
      ]
    },
    "en": {
      "hostal":"Hostel San Jorge Cafayate",
      "navbar": {
        "habitaciones":"Rooms",
        "nosotros": "About us",
        "contacto":"Contact",
        "galeria":"Gallery",
        "reserva":"Reservation request"
      },
      "footer": {
        "redes":"Follow us on our networks",
        "contacto":"Contact",
        "info": {
          "title":"Information",
          "booking":"Profile Booking",
          "politicas":"Hostel Policies",
          "faqs":"Faqs",
          "nosotros":"About us"
        },
        "colaboraciones":{
          "title":"Collaborations",
          "ph": "Photograph",
          "traducciones":"Translation"
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
          "descripcion":"The perfect place to rest and enjoy your vacations.",
          "btnHabitaciones": "Our Rooms",
          "cercania":"We are 2 blocks away of the main Square"
        },
        "seccionResenas": {
          "btn": "See reviews on Google"
        },
        "seccionNosotros":{
          "title":"About us",
          "descripcion1": "With more than 15 years providing accommodation to our guests, at Hostal San Jorge we offer you a comfortable, quiet and ideal place to rest.",
          "descripcion2": "Permit us be your home away and enjoy a greate and memorable experience, while you explore the charms of the beautiful Cafayate city, Salta province, Argentinian north-west.",
          "btn": "Read more"
        },
        "seccionHabitaciones": {
          "title":"Our Rooms",
          "descripcion": "We offer private rooms designed for your comfort and peace, ranging from single to quintuple.",
          "subtitulo":"Amenities and Services",
          "comodidades": [ ...comodidadesEn ],
          "btn": "See Rooms"
        },  
        "btnVerMas": "See more"  
      },
      "paginaHabitaciones":{
        "title":"Our Rooms",
        "descripcion": "Discover the charm and comfort of our rooms. Each space was designed thinking about your comfort.",
        "descripcionFiltro":"Select the room you are looking for.",
        "btnCard": "More Information",
        "filtros":[
          "All",
          "Single",
          "Double",
          "Triple",
          "Cuadruple",
          "Quintuple"
        ],
        "nota":"NOTA: Tarifas aplicables del 1 al 6 de Enero de 2025. Consultar tarifas para otras fechas."
      }, 
      "paginaNosotros":{
        "title":"About us",
        "descripcion1": "With more than 15 years providing accommodation to our guests, at Hostal San Jorge we offer you a comfortable, quiet and ideal place to rest. Permit us be your home away and enjoy a greate and memorable experience, while you explore the charms of the beautiful Cafayate city, Salta province, Argentinian north-west.",
        "subtitulo": "Our history",
        "descripcion2": "Hostal San Jorge began its history as a family project with the vision of offering tourists and travelers a place to rest and relax after exploring the wonderful landscapes of Cafayate. Over the years, we have become a preferred option for those who are looking for a quiet, warm and cozy place, always maintaining the personalized attention which sets us apart.",
        "apertura":"",
        "subtitulo1": "Mission",
        "descripcion3": "Our mission is to offer our guests a comfortable, quiet and ideal place to rest, with a commitment: provide a unique and pleasant experience, where you can feel at home while exploring the local culture.",
        "subtitulo2": "Vision",
        "descripcion4": "Our vision is to be a landmark hostel in the city, recognized for our outstanding hospitality, being a place where every guest feels comfortable and safe, ensuring that they will choose us again.",
        "subtitulo3": "Values",
        "descripcion5": ["Hospitality: We pride ourselves in making our guests feel like home, providing a warm and customized treatment.",
          "Quality: We maintain high standards of cleanliness, comfort and attention to ensure that your stay is unbeatable.",
          "Commitment: We are committed to the well-being of our guests, doing everything possible to surpass their expectations."],
      },
      "paginaGaleria":{
        "title":"Gallery",
        "descripcion": "¡Get to know our facilities and rooms through our image gallery!",
      },
      "paginaContacto":{
        "title":"Contact us",
        "descripcion1":"We are 2 blocks away from the main square of Cafayate.",
        "descripcion2": "Find us with Google Maps",
        "direccion": "Address",
        "whatsApp": "WhatsApp",
        "telefono": "Telephone",
        "formulario": {
          "title": "Ask a question",
          "nombre": "Name and Surname:",
          "email": "Email",
          "telefono": "Telephone",
          "mensaje": "Message",
          "textarea":"Hello, I wanted to ask about...",
          "btnEnviar": "Submit"
        }
      },
      "paginaReserva":{
        "title":"Submit your reservation inquiry",
        "descripcion": "Complete the following form with your personal information and dates of stay, and we will contact you as soon as possible.",
        "formulario": {
          "nombre": "Name and Surname",
          "email": "Email",
          "telefono": "Telephone",
          "adultos":"Adults",
          "menores":"Minors",
          "llegada":"Check-In Date",
          "salida":"Check-Out Date",
          "mensaje": "Message",
          "textarea":"Hello, I wanted to ask about...",
          "btnEnviar": "Submit inquiry"
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
        "title":"Hostel Policies",
        "descripcion":"The following are our general policies to guarantee a comfortable and safe staying at the hostel.",
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
        "tarifaActual":"Tarifa del 1 al 6 de Enero 2025",
        "capacidad":"Maximum capacity for",
        "subtitulo1":"Amenities",
        "btnReservar":"Reserve",
        "subtitulo2":"More information",
        "checkin":"available from 02:00 pm to 00:00 am",
        "checkout":"is until 10:00 am.",
        "estadia":"The stay includes breakfast",
        "horarioDesayuno":"Breakfast time: 8:30 a.m. to 9:45 a.m. (no exceptions)",
        "subtitulo3":"Payment Methods",
        "mediosPago": "In addition to cash, we accept bank transfers and you can also pay through the Mercadopago link provided by us where you can use your debit/credit card. This last option has a 10% extra charge.",
        "nota":"NOTA: Tarifa aplicable del 1 al 6 de Enero de 2025. Consultar tarifa para otras fechas."
      },
      "habitaciones": [
        ...habitacionesEn
      ]
    },
  };  