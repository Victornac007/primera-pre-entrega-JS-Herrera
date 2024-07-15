function jugarNumeroAleatorio() {
    const numeroAleatorio =  Math.floor(Math.random() * 100) + 1;
    
    let intentos = 0;
    let adivinado = false;

    while(adivinado === false){
        const intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        intentos++;
        if(intento === numeroAleatorio){
            alert("¡Felicidades! Elnúmero era " + numeroAleatorio + ", adivinaste el número en " + intentos + " intentos!");
            adivinado = true;
            jugarNumeroAleatorio();
        } else if (intento < numeroAleatorio){
            alert("El número es mayor");
        } else{
            alert("El número es más bajo. Intenta otra vez");
        }
    }
}
jugarNumeroAleatorio();