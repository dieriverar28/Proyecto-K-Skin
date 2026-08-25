let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");

formulario.addEventListener("submit", function(event){
    //Detenemos el envío automático del formulario
    event.preventDefault();

    //  Agregamos "!" al inicio
    if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        alert("El nombre solo debe contener letras");
        nombre.focus(); // Coloca el cursor en el campo del nombre
        return;         // Para el código para que no avance
    }

    // Si el nombre es correcto, se salta el "if" anterior y llega aquí
    alert("Compra exitosa!!");
});
