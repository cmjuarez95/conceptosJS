//Estructura condicional simple

/*
if(condicion logica){
        codigo si se cumple la condicion
}

*/


//Estructura condicional doble

/*

if(condicion logica){
    codigo si se cumple la condicion
}else{
    codigo si no se cumple la condicion
}

*/



//Estructura condicional else-if

/*

if(condicion logica 1){
    codigo si se cumple la condicion 1
}else-if(condicion 2){
    codigo si se cumple la condicion 2
}else{
    codigo si no se cumple ninguna condicion
}

*/

//Pedir la edad  y decir si es mayor de edad: Crear un algoritmo que pida la edad del usuario y determine
//si es mayor de edad


const edad=parseInt(prompt("Ingresa tu edad"))
console.log(edad)
if(edad>0 && edad<=110)
    {    

        if(edad>=18){
            alert("Sos mayor de edad")
        }else{
            alert("Sos menor de edad")
        }
    }else{
        alert("valor erroneo")
    }