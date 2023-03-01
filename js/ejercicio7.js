//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numero1 = prompt("Ingresa el primer numero:");
let numero2 = prompt("Ingresa el segundo numero:");
let numero3 = prompt("Ingresa el tercer numero:");

if (numero1 > numero2 && numero1 > numero3) {
  document.write("El primer numero es el mas grande: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
  document.write("El segundo numero es el mas grande: " + numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
  document.write("El tercer numero es el mas grande: " + numero3);
} else {
  document.write("Ningun numero es el mayor porque pusiste tres numeros iguales");
}
