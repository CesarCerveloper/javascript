
// Pruebas **
/* let entrada = prompt("Ingresa tu apuesta");
let salida = entrada + " " + "es tu apuesta";
alert(salida);


let nombre= prompt("Ingrese su nombre completo");
alert("Bienvenid@ a mi sitio web "+nombre);
let edad= prompt("Cual es su edad?");
alert("Su edad es de "+ edad +" años");
alert("Sus datos personales: "+ nombre +" "+ edad+ " años");

*/

// Crear simulador de crédito de autos 

let cantidad= prompt("Ingrese el monto que desea financiar");
let plazo= prompt("Ingrese el plazo al que desea el financiamiento: ¿24, 36 o 48 meses?");
let sueldo= prompt("¿Cuál es su salario mensual?");

/* alert("Sus datos ingresados son: \n" + "Cantidad a financiar: $"+ cantidad + " pesos " + "\n" + "Plazo deseado: "+ plazo + " meses " +"\n" + "Salario mensual: $" + sueldo + " pesos");
*/

let respuesta= confirm ("Confirma que sus datos ingresados son: \n" + "Cantidad a financiar: $"+ cantidad + " pesos " + "\n" + "Plazo deseado: "+ plazo + " meses " +"\n" + "Salario mensual: $" + sueldo + " pesos");

if (respuesta) {

    alert("Nos pondremos en contacto contigo para darte más información de tu financiamiento")

} else {

    alert("Recarga la página y vuelve a ingresar tus datos")
}
