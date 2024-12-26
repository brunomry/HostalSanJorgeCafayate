import { comodidades } from "./comodidades";
import faqs from "./faqs";

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
          "descripcion": "Con más de 15 años brindando alojamiento a nuestros huéspedes, en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal para descansar. Permítanos ser su hogar lejos de casa y disfrute de una experiencia agradable y memorable mientras explora los encantos de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste argentino.",
          "btn": "Leer más"
        },
        "seccionHabitaciones": {
          "title":"Nuestras Habitaciones",
          "descripcion1": "Ofrecemos habitaciones privadas diseñadas para su comodidad y tranquilidad, que van desde simples hasta quíntuples.",
          "subtitulo":"Comodidades y Servicios",
          "comodidades": [...comodidades],
          "btnSeeRooms": "Ver Habitaciones"
        },  
        "btnWpp": "Reserva ahora"    
      },
      "paginaHabitaciones":{
        "title":"Nuestras Habitaciones",
        "descripcion": "Descubre el encanto y la comodidad de nuestras habitaciones. Cada espacio fue diseñado pensando en tu confort.",
        "descripcionFiltro":"Puedes seleccionar la habitación que estés buscando",
        "btnCard": "Más información"
      }, 
      "paginaNosotros":{
        "title":"Sobre nosotros",
        "descripcion": "Con más de 15 años brindando alojamiento a nuestros huéspedes, en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal para descansar. Permítanos ser su hogar lejos de casa y disfrute de una experiencia agradable y memorable mientras explora los encantos de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste argentino.",
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
        "formContacto": {
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
          ...faqs
        ]
      },
      "paginaPoliticas":{
        "title":"Políticas del Hostal",
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
      "faq": {
        "question1": "¿A qué hora puedo realizar el Check-In?",
        "answer1": "El Check-In está disponible a partir de las 02:00 pm.",
        "question2": "¿A qué hora puedo realizar el Check-Out?",
        "answer2": "El Check-Out es hasta las 10:00 am.",
        "question3": "¿El Desayuno está incluido en la Estadía?",
        "answer3": "¡Sí, claro que sí! En nuestro hostal, ofrecemos servicio de desayuno cada mañana en el horario de las 08:15 a 09:45 am.",
        "question4": "¿Cuáles son las Formas de pago?",
        "question5": "¿El Hostal cuenta con Wi-Fi?",
        "answer5": "Sí, contamos con conexión Wi-Fi y puedes conectarte desde cualquier lugar del hostal, ya sea en tu habitación o en áreas comunes.",
        "question6": "¿Las Habitaciones son Privadas o Compartidas?",
        "answer6": "En nuestro hostal, todas las habitaciones son privadas garantizando la mayor privacidad para nuestros huéspedes.",
        "question7": "¿Las Habitaciones cuentan con Aire Acondicionado?",
        "answer7": "Actualmente tenemos dos habitaciones dobles con aire acondicionado para brindarle una estancia aún más cómoda. Las demás habitaciones aún no disponen de este servicio.",
        "question8": "¿Las Habitaciones cuentan con Televisión?",
        "answer8": "En nuestro hostal, nos enfocamos en brindar un espacio tranquilo e ideal para descansar, por lo que actualmente no ofrecemos servicio de televisión en ninguna de nuestras habitaciones o en áreas comunes.",
        "question9": "¿Las Habitaciones cuentan con Baño privado?",
        "answer9": "Sí, todas nuestras habitaciones disponen de baño privado.",
        "question10": "¿El Hostal cuenta con Estacionamiento?",
        "answer10": "En este momento, nuestro hostal no dispone de estacionamiento propio.",
        "question11": "¿El Hostal cuenta con Piscina?",
        "answer11": "Nuestro hostal no cuenta con piscina.",
        "question12": "¿Se aceptan mascotas?",
        "answer12": "No se aceptan mascotas por el momento.",
        "question13": {
          "descripcion1": {
            "span1": "Puedes realizar tu reserva de dos maneras: a través de WhatsApp o llamando a nuestro teléfono fijo. Para garantizar tu estadía, solicitamos un pago inicial del 50% como seña. Puedes realizar esta transacción a través de las",
            "link": "formas de pago",
            "span2": "habilitadas."
          },
          "descripcion2": "En caso de cancelación, te recomendamos notificarnos con al menos 12 horas de antelación para poder procesar el reintegro de la seña. Estas políticas nos permiten gestionar eficientemente nuestras reservas y brindarte el mejor servicio posible.",
          "descripcion3": "En caso de llegar más tarde de lo previsto, por favor comunícate con nosotros para informarnos. Esto nos ayuda a asegurarnos de tu llegada. Apreciamos tu colaboración, especialmente en períodos de alta demanda.",
          "descripcion4": "Si tienes alguna pregunta adicional, estamos disponibles para ayudarte."
        }
      }
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
          "derechos": "Todos los derechos reservados.",
          "autor": "Developed by"
        }
      },
      "paginaHome":{
        "seccionBanner": {
          "ubicacion":"Provincia de Salta, Noroeste argentino",
          "descripcion":"Tu lugar ideal para descansar y pasar tus vacaciones.",
          "btnHabitaciones": "Our Rooms",
          "cercania":"Estamos a 2 cuadras de la plaza principal"
        },
        "seccionResenas": {
          "btn": "Ver reseñas en Google"
        },
        "seccionNosotros":{
          "title":"About us",
          "descripcion": "Con más de 15 años brindando alojamiento a nuestros huéspedes, en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal para descansar. Permítanos ser su hogar lejos de casa y disfrute de una experiencia agradable y memorable mientras explora los encantos de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste argentino.",
          "btn": "See more"
        },
        "seccionHabitaciones": {
          "title":"Our Rooms",
          "descripcion1": "Ofrecemos habitaciones privadas diseñadas para su comodidad y tranquilidad, que van desde simples hasta quíntuples.",
          "subtitulo":"Comodidades y Servicios",
          "comodidades": [...comodidades],
          "btnSeeRooms": "See Roooms"
        },  
        "btnWpp": "Reserva ahora"    
      },
      "paginaHabitaciones":{
        "title":"Our Rooms",
        "descripcion": "Discover the charm and comfort of our rooms. Each space was designed thinking about your comfort.",
        "descripcionFiltro":"Puedes seleccionar la habitación que estés buscando",
        "btnCard": "More Information"
      }, 
      "paginaNosotros":{
        "title":"About us",
        "descripcion": "Con más de 15 años brindando alojamiento a nuestros huéspedes, en Hostal San Jorge le ofrecemos un lugar cómodo, tranquilo e ideal para descansar. Permítanos ser su hogar lejos de casa y disfrute de una experiencia agradable y memorable mientras explora los encantos de la hermosa ciudad de Cafayate en la provincia de Salta, noroeste argentino.",
      },
      "paginaGaleria":{
        "title":"Gallery",
        "descripcion": "¡Conoce nuestras instalaciones y habitaciones a través de nuestra galería de imágenes!",
      },
      "paginaContacto":{
        "title":"Contact us",
        "descripcion1":"Nos encontramos ubicados a 2 cuadras de la plaza principal de Cafayate.",
        "descripcion2": "Encuéntranos con Google Maps",
        "direccion": "Calixto Mamaní 105, Cafayate, Provincia de Salta, Argentina",
        "whatsApp": "WhatsApp",
        "telefonoFijo": "Teléfono fijo",
        "formContacto": {
          "title": "Déjanos tu consulta",
          "nombre": "Nombre y Apellido",
          "email": "Correo electrónico",
          "telefono": "Teléfono",
          "mensaje": "Mensaje",
          "btnEnviar": "Enviar"
        }
      },
      "paginaFaqs":{
        "title":"Faqs",
        "descripcion": "Consultá las preguntas más frecuentes de nuestros huéspedes.",
        "faqs": [
          ...faqs
        ]
      },
      "paginaPoliticas":{
        "title":"Políticas del Hostal",
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
        "subtitulo":"Amenities",
        "btnReservar":"Reserve",
        "checkin":"a partir de las 02:00 hasta 00:00",
        "checkout":"hasta 10 am",
        "estadia":"La estadía incluye Desayuno",
        "horarioDesayuno":"8:30 a 09:45 am (sin excepción)",
        "mediosPago": "Además de efectivo, aceptamos transferencias bancarias y también puedes abonar a través de link de mercadopago proporcionado por nosotros donde podrás utilizar tu tarjeta de débito/crédito. Esta última opción tiene un 10% de recargo.",
        "Individual": {
          "nombre": "Single Room",
          "precio": "15.000",
          "descripcion_breve": "Habitación simple de 4 m2 con cama individual",
          "descripcion_amplia": "Esta acogedora habitación de 4 metros cuadrados con cama individual incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima de 1 huésped.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Doble opción 1": {
          "nombre": "Double Room",
          "precio": "35.000",
          "descripcion_breve": "Habitación doble de 9 m2 con cama matrimonial",
          "descripcion_amplia": "Esta cómoda y luminosa habitación de 9 metros cuadrados cuenta con 1 cama matrimonial e incluye comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador, ventilador, armario y un mini balcón. Cuenta con una capacidad máxima de 2 huéspedes.",
          "comodidades": ["Wi-Fi", "Aire acondicionado", "Balcón","Armario", "Ropa de cama", "Sommier","Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Doble opción 2": {
          "nombre": "Double Room",
          "precio": "35.000",
          "descripcion_breve": "Habitación doble de 9 m2 con cama matrimonial",
          "descripcion_amplia": "Esta cómoda y luminosa habitación de 9 metros cuadrados cuenta con 1 cama matrimonial e incluye comodidades como Wi-Fi, aire acondicionado, baño privado, ropa de cama, toallas, artículos de tocador, ventilador, armario y un mini balcón. Cuenta con una capacidad máxima de 2 huéspedes.",
          "comodidades": ["Wi-Fi", "Aire acondicionado", "Balcón","Armario", "Ropa de cama", "Sommier","Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Triple": {
          "nombre": "Triple Room",
          "precio": "45.000",
          "descripcion_breve": "Habitación triple de 10 m2 con cama matrimonial e individual.",
          "descripcion_amplia": "Esta habitación cuenta con 1 cama matrimonial y 1 cama individual. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima de 3 huéspedes.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Armario", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Cuádruple": {
          "nombre": "Cuadruple Room",
          "precio": "60.000",
          "descripcion_breve": "Habitación cuádruple de 11 m2 con cama matrimonial y 2 camas individuales.",
          "descripcion_amplia": "Esta amplia y cómoda habitación de 12 metros cuadrados cuenta con cama matrimonial y 2 cama individuales. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima para 4 huéspedes.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        },
        "Quíntuple": {
          "nombre": "Quintuple Room",
          "precio": "75.000",
          "descripcion_breve": "Habitación quíntuple de 12 m2 con cama matrimonial, cama cucheta y cama individual",
          "descripcion_amplia": "Esta amplia y cómoda habitación de 12 metros cuadrados cuenta con cama matrimonial, cama individual y cama cucheta. Incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima para 5 huéspedes.",
          "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
        }
      },
      "faq": {
        "question1": "¿A qué hora puedo realizar el Check-In?",
        "answer1": "El Check-In está disponible a partir de las 02:00 pm.",
        "question2": "¿A qué hora puedo realizar el Check-Out?",
        "answer2": "El Check-Out es hasta las 10:00 am.",
        "question3": "¿El Desayuno está incluido en la Estadía?",
        "answer3": "¡Sí, claro que sí! En nuestro hostal, ofrecemos servicio de desayuno cada mañana en el horario de las 08:15 a 09:45 am.",
        "question4": "¿Cuáles son las Formas de pago?",
        "question5": "¿El Hostal cuenta con Wi-Fi?",
        "answer5": "Sí, contamos con conexión Wi-Fi y puedes conectarte desde cualquier lugar del hostal, ya sea en tu habitación o en áreas comunes.",
        "question6": "¿Las Habitaciones son Privadas o Compartidas?",
        "answer6": "En nuestro hostal, todas las habitaciones son privadas garantizando la mayor privacidad para nuestros huéspedes.",
        "question7": "¿Las Habitaciones cuentan con Aire Acondicionado?",
        "answer7": "Actualmente tenemos dos habitaciones dobles con aire acondicionado para brindarle una estancia aún más cómoda. Las demás habitaciones aún no disponen de este servicio.",
        "question8": "¿Las Habitaciones cuentan con Televisión?",
        "answer8": "En nuestro hostal, nos enfocamos en brindar un espacio tranquilo e ideal para descansar, por lo que actualmente no ofrecemos servicio de televisión en ninguna de nuestras habitaciones o en áreas comunes.",
        "question9": "¿Las Habitaciones cuentan con Baño privado?",
        "answer9": "Sí, todas nuestras habitaciones disponen de baño privado.",
        "question10": "¿El Hostal cuenta con Estacionamiento?",
        "answer10": "En este momento, nuestro hostal no dispone de estacionamiento propio.",
        "question11": "¿El Hostal cuenta con Piscina?",
        "answer11": "Nuestro hostal no cuenta con piscina.",
        "question12": "¿Se aceptan mascotas?",
        "answer12": "No se aceptan mascotas por el momento.",
        "question13": {
          "descripcion1": {
            "span1": "Puedes realizar tu reserva de dos maneras: a través de WhatsApp o llamando a nuestro teléfono fijo. Para garantizar tu estadía, solicitamos un pago inicial del 50% como seña. Puedes realizar esta transacción a través de las",
            "link": "formas de pago",
            "span2": "habilitadas."
          },
          "descripcion2": "En caso de cancelación, te recomendamos notificarnos con al menos 12 horas de antelación para poder procesar el reintegro de la seña. Estas políticas nos permiten gestionar eficientemente nuestras reservas y brindarte el mejor servicio posible.",
          "descripcion3": "En caso de llegar más tarde de lo previsto, por favor comunícate con nosotros para informarnos. Esto nos ayuda a asegurarnos de tu llegada. Apreciamos tu colaboración, especialmente en períodos de alta demanda.",
          "descripcion4": "Si tienes alguna pregunta adicional, estamos disponibles para ayudarte."
        }
      }
    },
    // "en": {
      // "rooms": "Rooms",
      // "gallery": "Gallery",
      // "contact": "Contact us",
      // "aboutUs": "About us",
      // "faqs": "FAQs",
      // "language": "Language",
      // "habitaciones": {
      //   "Individual": {
      //     "nombre": "Single Individual",
      //     "precio": "15.000",
      //     "descripcion_breve": "Habitación simple de 4 m2 con cama individual",
      //     "descripcion_amplia": "Esta acogedora habitación de 4 metros cuadrados con cama individual incluye comodidades como Wi-Fi, baño privado, ropa de cama, toallas, artículos de tocador y ventilador. Cuenta con una capacidad máxima de 1 huésped.",
      //     "comodidades": ["Wi-Fi", "Ropa de cama", "Toallas", "Baño privado", "Artículos de tocador", "Ventilador", "Estufa", "Ducha", "Agua caliente", "Desayuno incluido", "Silla"],
      //   }
      // },
      // "sectionWelcome": {
      //   "title": "Welcome to",
      //   "descripcion": "With over 15 years of providing lodging to our guests, at Hostal San Jorge we offer you a comfortable, quiet, and ideal place to rest. Let us be your home away from home and enjoy a pleasant and memorable experience while you explore the charms of the beautiful city of Cafayate in the province of Salta, northwestern Argentina."
      // },
      // "sectionOurRooms": {
      //   "title": "Our Rooms",
      //   "descripcion1": "We offer private rooms designed for your comfort and peace, ranging from single to quintuple.",
      //   "descripcion2": "Your perfect space and best experience await with us!",
      //   "btnSeeRooms": "See Rooms"
      // },
      // "sectionInfo": {
      //   "faqsTitle": "Frequently Asked Questions",
      //   "faqsDescription": "Check out the most frequently asked questions from our guests.",
      //   "howToArriveTitle": "How to Get Here",
      //   "howToArriveDescription": "Hostal San Jorge is located 2 blocks from the main square of Cafayate.",
      //   "galleryTitle": "Gallery",
      //   "galleryDescription": "You can also view more images of our Hostal.",
      //   "SeeMore": "See More"
      // },
      // "descripcionRooms": {
      //   "title": "Our Rooms",
      //   "descripcion": "Discover the charm and comfort of our rooms. Each space is designed with your comfort in mind.",
      //   "descripcion1": "Explore our rooms and don’t hesitate to choose us!",
      //   "descripcionPayMethods": "You can also check out:",
      //   "btnPayMethods": "Payment Methods"
      // },
      // "cardRoom": {
      //   "descripcionBedSingle": "1 single bed.",
      //   "descripcionBedDouble": "1 double bed.",
      //   "descripcionBedTriple": "1 double bed and 1 single bed.",
      //   "descripcionBedQuintuple": "1 double bed, 1 single bed, and 1 bunk bed.",
      //   "maximumCapacitySingle": "Maximum Capacity:",
      //   "maximumCapacityDouble": "Maximum Capacity:",
      //   "maximumCapacityTriple": "Maximum Capacity:",
      //   "maximumCapacityQuintuple": "Maximum Capacity:",
      //   "btnMoreInfo": "More Info"
      // },
      // "btnCheckRoom": "Check Room",
      // "sectionGallery": {
      //   "title": "Image Gallery",
      //   "descripcion1": "Explore our facilities and rooms through our image gallery!",
      // },
      // "sectionHowToGet": {
      //   "title": "How to Get to Our Hostal",
      //   "descripcion": "Find us with Google Maps"
      // },
      // "sectionContact": {
      //   "title": "Visit Us",
      //   "address": "Calixto Mamaní 105, Cafayate, Province of Salta, Argentina",
      //   "telephone": "Telephone",
      //   "formContact": {
      //     "name": "Name:",
      //     "email": "Email:",
      //     "questions": "Inquiry:",
      //     "btnSubmit": "Submit"
      //   }
      // },
      // "simpleRoom": "Single Room",
      // "dobleRoom": "Double Room",
      // "tripleRoom": "Triple Room",
      // "quintupleRoom": "Quintuple Room",
      // "roomDescription": {
      //   "subtitle": "Description",
      //   "descripcionSingle": "This cozy room features 1 single bed for one person and amenities such as Wi-Fi, private bathroom, bed linens, towels, toiletries, and ceiling fan.",
      //   "descripcionDouble": "This room features 1 double bed for 2 people and amenities such as Wi-Fi, air conditioning, private bathroom, bed linens, towels, toiletries, and ceiling fan. It also has a small balcony.",
      //   "descripcionTriple": "This room for 3 people features 1 double bed and 1 single bed. It includes amenities such as Wi-Fi, private bathroom, bed linens, towels, toiletries, and ceiling fan.",
      //   "descripcionQuintuple": "This spacious and comfortable room for 5 people features 1 double bed, 1 single bed, and 1 bunk bed. It includes amenities such as Wi-Fi, private bathroom, bed linens, towels, toiletries, and ceiling fan.",
      //   "share": "Share:"
      // },
      // "faq": {
      //   "question1": "What time can I Check-In?",
      //   "answer1": "Check-In is available from 02:00 pm.",
      //   "question2": "What time can I Check-Out?",
      //   "answer2": "Check-Out is until 10:00 am.",
      //   "question3": "Is Breakfast included in the Stay?",
      //   "answer3": "Yes, of course! At our hostal, we offer breakfast service every morning from 08:15 to 09:45 am.",
      //   "question4": "What are the Payment Methods?",
      //   "question5": "Does the Hostal have Wi-Fi?",
      //   "answer5": "Yes, we have Wi-Fi and you can connect from anywhere in the hostal, whether in your room or common areas.",
      //   "question6": "Are the Rooms Private or Shared?",
      //   "answer6": "At our hostal, all rooms are private, ensuring maximum privacy for our guests.",
      //   "question7": "Do the Rooms have Air Conditioning?",
      //   "answer7": "Currently, we have two double rooms with air conditioning to provide an even more comfortable stay. The other rooms do not yet have this service.",
      //   "question8": "Do the Rooms have a Television?",
      //   "answer8": "At our hostal, we focus on providing a peaceful and ideal space for rest, so we do not currently offer television service in any of our rooms or common areas.",
      //   "question9": "Do the Rooms have Private Bathrooms?",
      //   "answer9": "Yes, all of our rooms have private bathrooms.",
      //   "question10": "Does the Hostal have Parking?",
      //   "answer10": "At this moment, our hostal does not have its own parking.",
      //   "question11": "Does the Hostal have a Swimming Pool?",
      //   "answer11": "Our hostal does not have a swimming pool.",
      //   "question12": "Are Pets Allowed?",
      //   "answer12": "Pets are not allowed at the moment.",
      //   "question13": {
      //     "descripcion1": {
      //       "span1": "You can make your reservation in two ways: via WhatsApp or by calling our landline. To guarantee your stay, we request a 50% advance payment as a deposit. You can make this transaction through the",
      //       "link": "payment methods",
      //       "span2": "enabled."
      //     },
      //     "descripcion2": "In case of cancellation, we recommend notifying us at least 12 hours in advance to process the refund of the deposit. These policies allow us to efficiently manage our reservations and provide you with the best possible service.",
      //     "descripcion3": "If you are arriving later than expected, please contact us to inform us. This helps us ensure your arrival. We appreciate your cooperation, especially during peak periods.",
      //     "descripcion4": "If you have any further questions, we are available to assist you."
      //   }
      // },
    // }
  };  