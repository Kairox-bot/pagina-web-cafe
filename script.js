// ================================
// FORMULARIO DE CONTACTO
// ================================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("¡Gracias por escribirnos! Nos pondremos en contacto contigo.");

    formulario.reset();

});


// ================================
// MENSAJE EN CONSOLA
// ================================

console.log("Café Aroma - sitio web cargado correctamente.");