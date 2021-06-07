function toggleSection() {
    var operacionesContenedor = document.getElementById("operacionesContenedor");
    if (operacionesContenedor.style.display === "none") {
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
    var resultado = num1 + num2
    document.getElementById("result").textContent = "El resultado de la suma es: " + resultado;
}
function restar() {
    var num1 = parseInt(document.getElementById("myNumber1").value); 
    var num2 = parseInt(document.getElementById("myNumber2").value); 
    var resultado = num1 - num2
    document.getElementById("result").textContent = "El resultado de la resta es: " + resultado;
}
function multiplicar() {
    var num1 = parseInt(document.getElementById("myNumber1").value); 
    var num2 = parseInt(document.getElementById("myNumber2").value); 
    var resultado = num1 * num2
    document.getElementById("result").textContent = "El resultado de la multiplicación es: " + resultado;
}
function validarVacios(resultado,operacion) {
    if(!isNaN(resultado)) {
        imprimirMensaje(operacion,resultado);
    } else {
        document.getElementById('result').textContent = "Debe ingresar valores numericos";
    }
}