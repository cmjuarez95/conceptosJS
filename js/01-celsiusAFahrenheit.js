//Convertir grados Celsius a Fahrenheit: Crear un algoritmo 
//que permita al usuario ingresar una temperatura en grados Fahrenheit 
//y convertirla  a grados Celsius. La fórmula para convertir de Fahrenheit a 
//Celsius es: C= (5/9)?*(F-32)
document.writeln("<h1>Ejercicio 1</h1>")
const gradoCelsius = parseInt (prompt("Ingrese la temperatura en °C: "))
const gradoFahrenheit=(gradoCelsius*9/5)+32   //usar siempre const cuando sea posible, es buena practica


document.writeln("la temperatura es " + gradoCelsius+ " °C" +" y en Fahrenheit son: "+gradoFahrenheit +" °F")

console.log(gradoCelsius)