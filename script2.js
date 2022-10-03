

// Primer entrega ** Crear simulador de crédito de autos 

let cantidad= prompt("Ingrese la cantidad que desea financiar");
let plazo= prompt("Ingrese el plazo al que desea el financiamiento: ¿24, 36 o 48 meses?");
let sueldo= prompt("¿Cuál es su salario mensual?");

/* alert("Sus datos ingresados son: \n" + "Cantidad a financiar: $"+ cantidad + " pesos " + "\n" + "Plazo deseado: "+ plazo + " meses " +"\n" + "Salario mensual: $" + sueldo + " pesos");
*/

let cantidad_correcta = parseInt (cantidad);
let sueldo_correcto = parseInt (sueldo);

// const interes_24 = 

let respuesta= confirm ("Confirma que sus datos ingresados son: \n" + "Cantidad a financiar: $"+ cantidad_correcta + " pesos " + "\n" + "Plazo deseado: "+ plazo + " meses " +"\n" + "Salario mensual: $" + sueldo_correcto + " pesos");

if (respuesta) {

    alert("Nos pondremos en contacto contigo para darte más información de tu financiamiento")

} else {

    alert("Recarga la página y vuelve a ingresar tus datos")
}

function confirmar_datos() {

    let respuesta= confirm ("Confirma que sus datos ingresados son: \n" + "Cantidad a financiar: $"+ cantidad_correcta + " pesos " + "\n" + "Plazo deseado: "+ plazo + " meses " +"\n" + "Salario mensual: $" + sueldo_correcto + " pesos");

}