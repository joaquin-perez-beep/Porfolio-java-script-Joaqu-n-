//ejercicio uno calculadora el usuario puede ingresar numeros 
let numero1= parseFloat (prompt("ingrese el primer numero"));
let numero2= parseFloat (prompt("ingrese el segundo numero"));
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
console.log( `el resultado es:${resultado}`);
//