//ejercicio uno calculadora el usuario puede ingresar numeros 
//let numero1= parseFloat (prompt("ingrese el primer numero"));
/*let numero2= parseFloat (prompt("ingrese el segundo numero"));
let operacion= prompt("ingrese la operacion(+,-,*,/):");
let resultado;//sin resultado el usuario dira el resultado"let resultado"

if (operacion==="+") {
    resultado= numero1+numero2;
} else if (operacion==="-"){
    resultado=numero1-numero2;
}else if (operacion==="*"){
resultado=numero1*numero2;
}else if (operacion==="/"){
resultado=numero2!==0? numero1/numero2:"no se puede dividir por cero";
}else{
    resultado="Operacion no valida";
}
console.log( `el resultado es:${resultado}`);*/
//ejercicio dos
const numerroSecreto= Math.floor(Math.random()*10)+1;
let intentos=3;
let adivinado=false;
while (intentos> 0 && !adivinado) {
    let numero= parseInt(prompt(`adivina el numero(1 al 10),intentos: ${intentos}`));
    if(numero===numerroSecreto){
        console.log("adivino el numero");
        adivinado=true;
    }else if(numero>numerroSecreto){
console.log("el numero secreto es menor");
    }else if(numero>numerroSecreto){
console.log("el numero secreto es mayor");
}
intentos--;
}
if(!adivinado){
    console.log(`lo siento el numero secreto era:${numerroSecreto}`);
}