let paquete;
let monto;
let cuotas;

do {
    paquete = prompt("Ingresa Tipo de paquete: (Gold / Deluxe / Estadar)").toLowerCase();
} while ((paquete != "gold") && (paquete != "deluxe") && (paquete != "estadar"));

do {
    monto = parseFloat(prompt("Ingrese el Monto: (Maximo $100)"));
} while ((monto < 1) || (monto > 100));

do {
    cuotas = parseInt(prompt("Ingrese la Cantidad de Cuotas: (Maximo 12 coutas)"));
} while ((cuotas < 1)   ||(cuotas > 100));

let interes_paquete;
let costo_cuenta;
let salida;
const int = 10;

switch(paquete) {
    case "gold":
        interes_paquete = 4;
        costo_cuenta = 120;
        break;
    case "deluxe":
        interes_paquete = 3;
        costo_cuenta = 110;
        break;
    case "estandar":
        interes_paquete = 2;
        costo_cuenta = 100
        break;

    


}
/*
*/

let monto_int = monto + ((monto * int) / 100);
console.log("Monto c/int $" + monto_int);

let monto_interes = monto_int + ((monto_int * interes_paquete) / 100);
console.log("Monto c/Interes: $" + monto_interes);

let valor_cuotas = (monto_interes / cuotas);
console.log("Cuotas: $" + valor_cuotas);

alert("Valor Paquete: " + paquete + "\n" + "Monto: $" + monto.toFixed(2)+ "\n" + "Cuotas: " + cuotas);
alert("Precio Final: $" + monto_interes.toFixed(2) + "\n" + "Valor Cuota: $" + valor_cuotas.toFixed(2));

