//ejercicio uno calculadora el usuario puede ingresar numeros 
/*function ejerciciocalculadora() {
let numero1= parseFloat (prompt("ingrese el primer numero"));
while(isNaN(numero1)){
    numero1=parseFloat(prompt("tenes que ingresar un numero no una letra 😡"));

}
let numero2= parseFloat (prompt("ingrese el segundo numero"));
while(isNaN(numero2)){
    numero2=parseFloat(prompt("tenes que ingresar un numero no una letra 😡"));
}
let operacion = prompt("ingrese la operacion(+,-,*,/):");
while(operacion!=="+" && operacion!=="-" && operacion!=="*" && operacion!=="/"){
    operacion=prompt("tenes que ingresar solamente +,-,*,/ 🤬");

}
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

}

/*
//ejercicio dos
// ejercicio: adivinar un número dentro de un rango elegido por el usuario
const numeroMin = parseInt(prompt("Ingrese el número mínimo del rango (entero):"), 10);
const numeroMax = parseInt(prompt("Ingrese el número máximo del rango (entero):"), 10);

if (Number.isNaN(numeroMin) || Number.isNaN(numeroMax) || numeroMin >= numeroMax) {
    console.log("Rango inválido. Asegúrate de ingresar dos enteros y que el mínimo sea menor que el máximo.");
} else {
    const numeroSecreto = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
    let intentos = 3; // puedes cambiar la cantidad de intentos si lo deseas
    let adivinado = false;

    while (intentos > 0 && !adivinado) {
        const entrada = prompt(`Adivina el número entre ${numeroMin} y ${numeroMax}. Intentos restantes: ${intentos}`);
        const numero = entrada === null ? NaN : parseInt(entrada, 10);

        if (Number.isNaN(numero)) {
            console.log("Entrada inválida. Ingresa un número entero.");
        } else if (numero === numeroSecreto) {
            console.log("¡Adivinaste el número!");
            adivinado = true;
        } else if (numero > numeroSecreto) {
            console.log("El número secreto es menor.");
        } else {
            console.log("El número secreto es mayor.");
        }

        intentos--;
    }

    if (!adivinado) {
        console.log(`Lo siento, el número secreto era: ${numeroSecreto}`);
    }
}

//ejercicio 3 tabla de multiplicar con array
const numero = parseInt(prompt("ingrese el numero para multiplicar"));
const limite = parseInt(prompt("ingrese hasta qué número multiplicar"));
const resultados = []; // Array para guardar los resultados

// Guardamos cada multiplicación en el array
for (let i = 1; i <= limite; i++) {
    resultados.push({
        multiplicador: i,
        resultado: numero * i
    });
}

// Mostrar título
console.log(`Tabla de multiplicar del ${numero}:`);

// Mostrar todos los resultados con for...of
for (const item of resultados) {
    console.log(`${numero} x ${item.multiplicador} = ${item.resultado}`);
}
//ejercicio 4
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;

}

const fahrenheitAcelsius=(fahrenheit)=>((fahrenheit-32)*5)/9;
let opcion = prompt("elige una opcion:\n1.°c-->°f\n2.°F-->°C\n3.k-->°c");
if (opcion==="1") {
    let celcius=parseFloat(prompt("ingrese la temperatura en°c "))
    console.log(`${celcius}°C= ${celsiusAFahrenheit(celcius).toFixed(2)}°F`);
} else if (opcion==="2") {
    let fahrenheit=parseFloat(prompt())
    console.log(`${fahrenheit}°F= ${fahrenheitAcelsius(fahrenheit).toFixed(2)}°C`);

}else if (opcion==="3"){
  let kelvin=parseFloat(prompt("ingrese la temperatura en K "))
    console.log(`${kelvin}K= ${ (kelvin - 273.15).toFixed(2)}°C`);
}else{
    console.log("opcion invalida");
}
//ejercicio 5 lista de compras
let listaCompras = [
  { nombre: "leche", precio: 1200, cantidad: 2 },
  { nombre: "huevos", precio: 1000, cantidad: 1 },
  { nombre: "pan", precio: 3000, cantidad: 1 },
  { nombre: "cafe", precio: 3100, cantidad: 1 },
];

function listar() {
  console.clear();
  console.log("Lista de compras:");
  listaCompras.forEach((item, i) => {
    console.log(`${i}. ${item.nombre} (x${item.cantidad}) - $${item.precio}`);
  });
}

function agregar() {
  const nombre = prompt("Nombre del producto:")?.trim();
  if (!nombre) {
    console.log("Nombre inválido.");
    return;
  }
  const precio = parseFloat(prompt("Precio (número):"));
  if (Number.isNaN(precio) || precio < 0) {
    console.log("Precio inválido.");
    return;
  }
  const cantidad = parseInt(prompt("Cantidad (entero):"), 10);
  if (Number.isNaN(cantidad) || cantidad <= 0) {
    console.log("Cantidad inválida.");
    return;
  }
  // usar push() para agregar
  listaCompras.push({ nombre, precio, cantidad });
  console.log(`${nombre} agregado.`);
}

function eliminar() {
  listar();
  const idx = parseInt(prompt("Ingrese el índice del producto a eliminar:"), 10);
  if (Number.isNaN(idx) || idx < 0 || idx >= listaCompras.length) {
    console.log("Índice inválido.");
    return;
  }
  const eliminado = listaCompras.splice(idx, 1)[0]; // splice() elimina y devuelve el elemento
  console.log(`${eliminado.nombre} eliminado.`);
}

function buscar() {
  const texto = prompt("Nombre a buscar:") ?? "";
  const encontrado = listaCompras.find(item => item.nombre.toLowerCase() === texto.toLowerCase());
  if (encontrado) {
    console.log(`Encontrado: ${encontrado.nombre} - $${encontrado.precio} (x${encontrado.cantidad})`);
  } else {
    console.log("Producto no encontrado.");
  }
}
function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Elige una opción:\n" +
      "1 - Listar productos\n" +
      "2 - Agregar producto\n" +
      "3 - Eliminar producto\n" +
      "4 - Buscar producto\n" +
      "5 - Salir"
    );
    switch (opcion) {
      case "1":
        listar();
        break;
      case "2":
        agregar();
        break;
      case "3":
        eliminar();
        break;
      case "4":
        buscar();
        break;
      case "5":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida.");
    }
  } while (opcion !== "5");
}
// Ejecutar menú
menu();*/
//ejercicio 6 
/*let agenda = JSON.parse(localStorage.getItem('agenda')) || []; // Cargar datos guardados o array vacío

function guardarEnLocalStorage() {
    localStorage.setItem('agenda', JSON.stringify(agenda));
}*/

/*function agregarContactos(nombre, telefono, email) {
    const contacto = { nombre, telefono, email };
    agenda.push(contacto); // Usar push para agregar el contacto
    console.log(`Contacto agregado: ${nombre}`); // Corregida la plantilla de texto
    guardarEnLocalStorage(); // Guardar después de agregar
}

function mostrarAgenda() {
    console.log("Lista de contactos:");
    agenda.forEach(({ nombre, telefono, email }, i) => {
        console.log(`${i + 1}. ${nombre} - ${telefono} - ${email}`); // Corregida la plantilla de texto
    });
}

function buscarContacto(nombre) {
    const contacto = agenda.find(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (contacto) {
        console.log(`Encontrado: ${contacto.nombre} - ${contacto.telefono}`);
    } else {
        console.log("Contacto no encontrado");
    }
}

function exportarAgenda() {
    const json = JSON.stringify(agenda, null, 2);
    console.log("Agenda en formato JSON:\n", json);
}*/

/*function eliminarContacto(nombre) {
    const longitudAnterior = agenda.length;
    agenda = agenda.filter(
        (c) => c.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    
    if (agenda.length < longitudAnterior) {
        console.log(`Contacto eliminado: ${nombre}`); // Corregida la plantilla de texto
        guardarEnLocalStorage(); // Guardar después de eliminar
    } else {
        console.log("Contacto no encontrado");
    }
}

// Función para probar la agenda
function probarAgenda() {
    agregarContactos("Juan", "2612345678", "juan@email.com");
    agregarContactos("Maria", "2698765432", "maria@email.com");
    mostrarAgenda();
    
    console.log("\nBuscando a Juan:");
    buscarContacto("Juan");
    
    console.log("\nEliminando a Maria:");
    eliminarContacto("Maria");
    
    console.log("\nMostrando agenda actualizada:");
    mostrarAgenda();
}*/

// Ejecutar prueba
//probarAgenda();
// ejercico 7
/*function actualizarReloj(){
  const ahora=new Date();
  const horas=String(ahora.getHours()).padStart(2,"0");
  const minutos=String(ahora.getMinutes()).padStart(2,"0");
  const segundos=String(ahora.getSeconds()).padStart(2,"0");
  const reloj= document.getElementById("reloj");
  reloj.innerHTML=`${horas}:${minutos}:${segundos}`;
 const hora = parseInt(horas);
    
     Remover todas las clases anteriores
    reloj.classList.remove('amanecer', 'manana', 'mediodia', 'tarde', 'atardecer', 'noche');
    
    // Agregar la clase según la hora
    if (hora >= 5 && hora < 8) {
        reloj.classList.add('amanecer');
    } else if (hora >= 8 && hora < 12) {
        reloj.classList.add('manana');
    } else if (hora >= 12 && hora < 16) {
        reloj.classList.add('mediodia');
    } else if (hora >= 16 && hora < 19) {
        reloj.classList.add('tarde');
    } else if (hora >= 19 && hora < 21) {
        reloj.classList.add('atardecer');
    } else {
        reloj.classList.add('noche');
    }
}
setInterval(actualizarReloj,1000);
actualizarReloj();*/



const apiKey = "c5dba7b153308e7055a2f8f548742c05"; // 🔑 Regístrate en openweathermap.org

document.getElementById("buscar").addEventListener("click", async () => {
  const ciudad = document.getElementById("ciudad").value.trim();
  if (!ciudad) return alert("Ingrese una ciudad master y le aviso si se inunda");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      document.getElementById("resultado").innerHTML = "❌ Ciudad no encontrada  🌊";
      return;
    }

    document.getElementById("resultado").innerHTML = /*llama el texto el innerHTML*/` 
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temp: ${data.main.temp}°C</p>
      <p>💨 Viento: ${data.wind.speed} km/h</p>
      <p>🌦 Clima: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("resultado").innerHTML = "⚠️ Error al conectar con la API";
  }
});
