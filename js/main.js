//JUEGO DE ADIVINAR EL NÚMERO
function jugarNumeroAleatorio() {
    const numeroAleatorio =  Math.floor(Math.random() * 100) + 1;
    
    let intentos = 0;
    let adivinado = false;

    while(adivinado === false){
        const intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        intentos++;
        if(intento === numeroAleatorio){
            alert("¡Felicidades! El número era " + numeroAleatorio + ", adivinaste el número en " + intentos + " intentos!");
            adivinado = true;
            jugarNumeroAleatorio();
        } else if (intento < numeroAleatorio){
            if(numeroAleatorio - intento <= 5){
                alert("¡Estás cerca! el número es un poco mayor")
            } else{
                alert("El número es más alto. Intenta otra vez");
            }
        } else{
            if(intento - numeroAleatorio <= 5){
                alert("¡Estás cerca! el número es un poco menor");
            } else{
                alert("El número es más bajo. Intenta otra vez");
            }
        }
    }
}
//Juego de mini calculadora
let num1 = parseInt(prompt("Hola! bienvenido a tu calculadora personal, a continuación ingresa el primer número de tu operación, por favor"));
let num2 = parseInt(prompt("Ahora ingresa el segundo númnero de tu operación"));
let operacion = prompt(`Casi listo! por último ingresa el SIGNO de la operación que deseas hacer:
Sumar = +
Restar =  -
Multiplicar = * 
Dividir = /`);

function calcular (numero1, numero2, operacionMatematica) {
    switch (operacionMatematica) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else{
                alert("No se puede dividir por 0");
            }
        default:
            return "Operación inválida"
    }
}
let resultado = calcular(num1, num2, operacion);
alert("El resultado es: " + num1 + operacion + num2 + " = " + resultado + " Gracias por calcular con nostros, Vuelve pronto!");