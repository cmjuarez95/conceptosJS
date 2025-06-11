//Crear un programa al estilo de un cajero automatico con las siguientes acciones
//1- Consultar el saldo
//2- Ingresar dinero
//3- extraer dinero

const opcion = prompt("seleccione una opcion: 1- Consultar el saldo, 2- Ingresar dinero, 3- extraer dinero")
let saldo = 10000;

switch (opcion){
    case "1": 
        document.writeln("su saldo es $" + saldo)
        break;
    case "2": 
        const deposito = parseFloat(prompt("Ingrese el monto que desea depositar"))
        if(deposito>=1000 && deposito<=2000000){

        
        saldo=saldo+deposito
        document.writeln(`Depositaste $${deposito} tu saldo actual es: $${saldo}`)
        }else{
            alert("Ingresaste un monto inválido")
        }

        break;
    case "3":
        const montoExtraer=parseFloat(prompt("Ingresa cuanto queres extraer"))
        if(montoExtraer <= saldo){
            saldo=saldo-montoExtraer
            document.writeln(`El monto a extraer es $${montoExtraer}, tu saldo actual es $${saldo}`)
        }else{
            alert("monto inválido")
        }
        break;
    default:
        alert("Ingresaste una opcion errónea")

}