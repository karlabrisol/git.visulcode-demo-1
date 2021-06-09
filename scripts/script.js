function toggleSection() {
    var operacionesContenedor = document.getElementById("operacionesContenedor");
    if (!operacionesContenedor.style.display || operacionesContenedor.style.display === "none") {
        operacionesContenedor.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar Operaciones";
    } else {
        operacionesContenedor.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar Operaciones";
    }
}
function sumar() {
    var num1 = parseInt(document.getElementById("myNumber1").value); 
    var num2 = parseInt(document.getElementById("myNumber2").value); 
    var resultado = num1 + num2;
    var operacion = " suma ";
    validarVacios(resultado,operacion);
}
function restar() {
    var num1 = parseInt(document.getElementById("myNumber1").value); 
    var num2 = parseInt(document.getElementById("myNumber2").value); 
    var resultado = num1 - num2;
    var operacion = " resta ";
    validarVacios(resultado,operacion);
}
function multiplicar() {
    var num1 = parseInt(document.getElementById("myNumber1").value); 
    var num2 = parseInt(document.getElementById("myNumber2").value); 
    var resultado = num1 * num2;
    var operacion = " multiplicación ";
    validarVacios(resultado,operacion);
}
function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById("result").textContent = "Debe ingresar valores numéricos";
    }
}
function imprimirMensaje(operacion,resultado) {
    document.getElementById("result").textContent = "El resultado de la" + operacion + "es: " + resultado;
}