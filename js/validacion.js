// 1)Se Captura los elementos del HTML mediante sus IDs
let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut"); // id en minúscula para coincidir con el HTML
let email = document.getElementById("email");
let fono = document.getElementById("fono");
let fecnac = document.getElementById("fecnac");
let productos = document.getElementById("productos");

// 2)Se  Escucha el evento cuando la persona presiona el botón de envío
formulario.addEventListener("submit", function(event){
    // Cancela el envío automático de la página para procesar la validación primero
    event.preventDefault();

    // VALIDACIÓN DEL  NOMBRE
    // Usamos .trim() para quitar espacios vacíos al inicio y al final
    if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())){
        alert("El nombre solo debe contener letras.");
        nombre.focus(); // Coloca el cursor en el input del nombre
        return; // Detiene la ejecución para que no pase al siguiente if
    }


    // VALIDACIÓN DE RUT CHILENO
    // Valida entre 7 u 8 números, un guión obligatorio, y un número o letra K/k al final
    if (!/^\d{7,8}-[0-9kK]$/.test(rut.value.trim())){
        alert("El RUT debe incluir guión y dígito verificador (Ej: 12345678-k)");
        rut.focus();
        return;
    }

    
    // VALIDACIÓN DEL CORREO CON DOMINIOS PERMITIDOS
    // La expresión regular restringe los correos exclusivamente a @gmail.com, @outlook.com o @duocuc.cl
    const regexEmail = /^[\w.-\.]+@(gmail\.com|outlook\.com|duocuc\.cl)$/i;
    if (!regexEmail.test(email.value.trim())){
        alert("El correo solo permite dominios: @gmail.com, @outlook.com o @duocuc.cl");
        email.focus();
        return;
    }

    
    // VALIDACION DEL TELÉFONO CHILENO
    // Exige obligatoriamente el prefijo +56 seguido de exactamente 9 dígitos
    if (!/^\+56\d{9}$/.test(fono.value.trim())){
        alert("El teléfono debe comenzar con +56 y tener 9 dígitos adicionales (Ej: +56912345678)");
        fono.focus();
        return;
    }

    // VALIDACIÓN   DE MAYORÍA DE EDAD (+18 AÑOS)
    // Verificamos si el usuario dejó el campo de fecha vacío
    if (!fecnac.value) {
        alert("Por favor, seleccione su fecha de nacimiento.");
        fecnac.focus();
        return;
    }

    //Se convierte el valor del input a un objeto de tipo Fecha (Date)
    let fechaNacimiento = new Date(fecnac.value);
    let fechaActual = new Date(); // Obtiene la fecha y hora exacta del día de hoy

    //Se Calcula una resta simple de años (ejemplo: 2026 - 2010 = 16)
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    //Obtenemos la diferencia de meses para saber si ya cumplió años este año
    let diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();

    // Ajuste por si el usuario AÚN no ha estado de cumpleaños en el año actual:
    // Si la diferencia de meses es menor a 0 (ej: cumpleaños en diciembre y estamos en agosto)
    // O si estamos en el mismo mes, pero el día de hoy es menor al día de su nacimiento.
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--; // Le restamos 1 año a la resta simple porque todavía no los cumple
    }

    // Finalmente evaluamos si la edad calculada es menor a 18
    if (edad < 18) {
        alert("Debes ser mayor de 18 años para realizar esta compra.");
        fecnac.focus();
        return;
    }

    
    //SELECCIÓN DE PRODUCTO
    // Compara si la opción seleccionada sigue siendo la opción vacía inicial
    if (productos.value === "") {
        alert("Debe seleccionar un producto del listado.");
        productos.focus();
        return;
    }

    // VALIDACIÓN  FORMA DE PAGO SELECCIONADA
    // Busca cuál elemento de tipo "radio" con nombre "fdepago" está marcado (:checked)
    let pago = document.querySelector('input[name="fdepago"]:checked');
    if (!pago) {
        alert("Por favor, seleccione una forma de pago (Débito, Crédito o Efectivo).");
        return;
    }


    // RESPUESTA FINAL
    // Si el código llega a esta parte significa que pasó TODOS los "if" anteriores sin detenerse
    alert("¡¡Validación correcta! Compra realizada con éxito.");
});