function ingresarNombre(mensaje) {
    alert("Hola : " + mensaje);
}

function mayorDeEdad(edad) {
    if (edad >= 18) {
        alert("Sos mayor de edad!");
    } else {
        alert("No sos mayor de edad");
    }

}


let nombreIngresado = prompt("Ingrese su Nombre completo:");
ingresarNombre(nombreIngresado);
let valor = parseInt(prompt("Ingrese su Edad"));//Variable
mayorDeEdad(valor);