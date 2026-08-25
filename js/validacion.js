let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");
let rut=document.getElementById("RUT");
let email=document.getElementById("email");

formulario.addEventListener("submit", function(event){
    //Detenemos el envío automático del formulario
    event.preventDefault();

    //  Agregamos "!" al inicio
    if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        alert("El nombre solo debe contener letras");
        nombre.focus(); // Coloca el cursor en el campo del nombre
        return;         // Para el código para que no avance
    }
    if (!/^\d{7,8}-[0-9kK]$/.test(rut.value)){
        alert("El rut debe (7 u 8 dígitos, guión y DV)")
        return ;
    }
    

    // Si el nombre es correcto, se salta el "if" anterior y llega aquí
    alert("Compra exitosa!!");
});
