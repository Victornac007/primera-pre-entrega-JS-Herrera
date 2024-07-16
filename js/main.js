//ESCOGER JUEGO
let eleccionDeJuego = parseInt(prompt(`Bienvenido a la primera pre entrega del proyecto! tienes cuatro opciones que probar:
-- Jugar Número aleatorio: presiona 1
-- Usar la calculadora: presiona 2
-- Verificar si un número es par o impar: 3
-- Usar contador de vocales: 4`));
if(eleccionDeJuego === 1){
    jugarNumeroAleatorio();
} else if(eleccionDeJuego === 2){
    juegoCalculadora();
} else if (eleccionDeJuego === 3) {
    esParImpar();
} else if (eleccionDeJuego === 4) {
    jugarContarVocales();
}else{
    parseInt(prompt(`Por favor ingresa un número válido para continuar:
-- Jugar Número aleatorio: presiona 1
-- Usar la calculadora: presiona 2
-- Verificar si un número es par o impar: 3
-- Usar contador de vocales: 4`));
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
    Verificar si un número es par o impar: 2
    Ir al cuenta vocales: 3
    Volver a Jugar Número Aleatorio: presiona 4`));
        if(eleccionMenuNumeroAleatorio === 1){
            juegoCalculadora();
        } else if(eleccionMenuNumeroAleatorio === 2){
            esParImpar();
        } else if (eleccionMenuNumeroAleatorio === 3) {
            jugarContarVocales();
        } else if (eleccionMenuNumeroAleatorio === 4) {
            jugarNumeroAleatorio();
        } else{
            parseInt(prompt(`Por favor ingresa un número válido para continuar:
    Usar la calculadora: presiona 1
    Verificar si un número es par o impar: 2
    Ir al cuenta vocales: 3
    Volver a Jugar Número Aleatorio: presiona 4`));
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
    Verificar si un número es par o impar: 2
    Jugar Cuenta Vocales: 3
    Volver a usar la calculadora: presiona 4
    `));
    if(eleccionMenuCalculadora === 1){
        jugarNumeroAleatorio();
    } else if(eleccionMenuCalculadora === 2){
        esParImpar();
    } else if (eleccionMenuCalculadora === 3) {
        jugarContarVocales();
    } else if (eleccionMenuCalculadora === 4) {
        juegoCalculadora();
    } else{
        parseInt(prompt(`Por favor ingresa un número válido para continuar:
    Jugar Número aleatorio: presiona 1
    Verificar si un número es par o impar: 2
    Jugar Cuenta Vocales: 3
    Volver a usar la calculadora: presiona 4`));
    }
}
//Es par o Impar
function esParImpar() {
    let numero = parseInt(prompt("Para verificar si el número es par o impar, por favor ingresa un número"));
    if (numero % 2 === 0) {
        alert("El número " + numero + " es par");
    } else {
        alert("El número " + numero + " es impar");
    }
    let eleccionMenuEsParImpar = parseInt(prompt(`¿Que te gustaria hacer ahora?
    Jugar Número aleatorio: presiona 1
    Usar la calculadora: presiona 2
    Jugar Cuenta Vocales: 3
    Volver a verificar si un número es par o impar: 4`));
    if(eleccionMenuEsParImpar === 1){
        jugarNumeroAleatorio();
    } else if(eleccionMenuEsParImpar === 2){
        juegoCalculadora();
    } else if (eleccionMenuEsParImpar === 3) {
        jugarContarVocales();
        } else if (eleccionMenuEsParImpar === 4) {
        esParImpar();
    } else{
        parseInt(prompt(`Por favor ingresa un número válido para continuar:
    Jugar Número aleatorio: presiona 1
    Usar la calculadora: presiona 2
    Jugar Cuenta Vocales: 3
    Verificar si un número es par o impar: 4`));
    };
}
//Jugar Contar Vocales
function jugarContarVocales() {

    function contarVocales(cadena) {
    
        let contador = 0;
        for (let i = 0; i < cadena.length; i++) {
            if ('aeiouAEIOU' .includes(cadena[i])) {
                contador++;
            }
        }
        return contador;
    }
    
    let cadenaUsuario = prompt("Hola! bienvenido a nuestro contador de vocales, por favor ingrese una oración para identificar cuantas vocales hay en ella");

    let numeroDeVocales = contarVocales(cadenaUsuario);

    alert("La oración ingresada tiene: " + numeroDeVocales + " vocales en ella, gracias por utilizar nuestra aplicación (enter para continuar)");

    let eleccionMenuContarVocal = parseInt(prompt(`¿Que te gustaria hacer ahora?
        Jugar Número aleatorio: presiona 1
        Usar la calculadora: presiona 2
        Verificar si un número es par o impar: 3
        Volver a contar vocales: 4`));
        if(eleccionMenuContarVocal === 1){
            jugarNumeroAleatorio();
        } else if(eleccionMenuContarVocal === 2){
            juegoCalculadora();
        } else if (eleccionMenuContarVocal === 3) {
            esParImpar();
        } else if (eleccionMenuContarVocal === 4){
            jugarContarVocales();
        } else{
            parseInt(prompt(`Por favor ingresa un número válido para continuar:
        Jugar Número aleatorio: presiona 1
        Usar la calculadora: presiona 2
        Verificar si un número es par o impar: 3
        Volver a contar vocales: 4`));
        }
}
