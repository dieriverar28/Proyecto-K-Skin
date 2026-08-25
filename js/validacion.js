
let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if(!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
        alert("Nombre solo debe contener letras");
        nombre.focus();
        return;
    }
    alert("Compra exitosa!");  
})