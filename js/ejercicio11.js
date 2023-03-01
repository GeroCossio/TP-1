//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let numero = parseInt(prompt("Ingresa un numero:"));

if (numero % 2 === 0) {
  document.write("El numero " + numero + " es divisible por 2");
} else if (numero % 3 === 0) {
  document.write("El numero " + numero + " es divisible por 3");
} else if (numero % 5 === 0) {
  document.write("El numero " + numero + " es divisible por 5");
} else if (numero % 7 === 0) {
  document.write("El numero " + numero + " es divisible por 7");
} else {
  document.write("El numero que ingresaste no es divisible por ninguno");
}
git