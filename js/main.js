//ESCOGER JUEGO
let eleccionDeJuego = parseInt(prompt(`Bienvenido a la primera pre entrega del proyecto! tienes dos opciones que probar:
-- Jugar Número aleatorio: presiona 1
-- Usar la calculadora: presiona 2`));
if(eleccionDeJuego === 1){
    jugarNumeroAleatorio();
} else if(eleccionDeJuego === 2){
    juegoCalculadora();
};

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
    let eleccionMenuNumeroAleatorio = parseInt(prompt(`¿Que te gustaria hacer ahora?
    Usar la calculadora: presiona 1
    Volver a Jugar Número Aleatorio: presiona 2
    `));
        if(eleccionMenuNumeroAleatorio === 1){
            jugarNumeroAleatorio();
        } else if(eleccionMenuNumeroAleatorio === 2){
            jugarNumeroAleatorio();
        };
}
//Juego de mini calculadora
function juegoCalculadora() {
        let num1;
    do{
        num1 = parseInt(prompt("Hola! bienvenido a tu calculadora personal, a continuación ingresa el primer número de tu operación, por favor"));
        if (isNaN(num1)) {
            alert("Número inválido");
        }
    }while(isNaN(num1))
    let num2;
    do {
        num2 = parseInt(prompt("Ahora ingresa el segundo númnero de tu operación"));
        if (isNaN(num2)) {
            alert("Número inválido");
        }
    } while (isNaN(num2));
    let operacion;
    do {
        operacion = prompt(`Casi listo! por último ingresa el SIGNO de la operación que deseas hacer:
            Sumar = +
            Restar =  -
            Multiplicar = * 
            Dividir = /`);
    } while (operacion !== "+" && operacion !== "-" && operacion !== "*" && operacion !== "/");
    

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
        }
    }
    let resultado = calcular(num1, num2, operacion);
    alert("El resultado es: " + num1 + operacion + num2 + " = " + resultado + " Gracias por calcular con nostros, Vuelve pronto!");

    let eleccionMenuCalculadora = parseInt(prompt(`¿Que te gustaria hacer ahora?
    Jugar Número aleatorio: presiona 1
    Volver a usar la calculadora: presiona 2
    `));
    if(eleccionMenuCalculadora === 1){
        jugarNumeroAleatorio();
    } else if(eleccionMenuCalculadora === 2){
        juegoCalculadora();
    };
}
