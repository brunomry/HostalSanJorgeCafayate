const formConsulta = document.getElementById('formQuestions');
const paginaDeRegreso = document.getElementById('inputNext');

paginaDeRegreso.value = window.location.href;


formConsulta.action = "https://formsubmit.co/hostalsanjorgecafayate@gmail.com";

if(formConsulta.action){
  Swal.fire({
    icon: "success",
    title: "Tu consulta fue enviada con éxito! En breve recibirás una respuesta.",
    showConfirmButton: true,
  });
}
