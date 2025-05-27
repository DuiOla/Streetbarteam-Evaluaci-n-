function saludoInicial() {
    alert("¡Bienvenido a StreetBarTeam!");
    console.log("Saludo inicial ejecutado.");
    var contenedor = document.getElementById("resultadoExtra");
    if (contenedor) {
        contenedor.innerText = "¡Disfruta tu entrenamiento!";
    }
}

function validarFormulario() {
    var nombre = document.getElementById("nom").value;
    var correo = document.getElementById("co").value;
    var telefono = document.getElementById("fon").value;

    if (nombre === "" || correo === "" || telefono === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Correo inválido.");
        return false;
    }

    if (isNaN(telefono)) {
        alert("Teléfono debe ser numérico.");
        return false;
    }
	

    var niveles = ["básico", "intermedio"];
    niveles.push("avanzado");
    niveles.unshift("principiante");
    niveles.pop();
    niveles.shift();
    var resumen = niveles.join(" > ").toUpperCase();

    var resumenCadena = nombre.concat(" entrenará en nivel ").concat(resumen);
    resumenCadena = resumenCadena.substring(0, 60);
    resumenCadena += ". Longitud: " + resumenCadena.length;

    document.getElementById("resultadoExtra").innerText = resumenCadena;

    var prueba = parseInt("streetbar");
    if (isNaN(prueba)) {
        console.warn("Resultado no numérico detectado (NaN)");
    }

    for (var i = 0; i < nombre.length; i++) {
        if (nombre.charAt(i) === " ") {
            console.log("Espacio detectado en posición: " + i);
        }
    }
	
	

    var objeto = { nivel: "avanzado", dias: 5 };
    for (var clave in objeto) {
        console.log("Propiedad " + clave + ": " + objeto[clave]);
    }

    return true;
}
function verificarEdad() {
    console.log("Función verificarEdad ejecutándose...");

    var edad = prompt("Introduce tu edad:");

    // Verificar si el valor es numérico
    if (isNaN(edad) || edad.trim() === "") {
        alert("Por favor, ingresa una edad válida.");
        return;
    }

    edad = parseInt(edad); // Convertir el valor a número

    if (edad >= 18 && edad <= 65) {
        console.log("Es adulto en edad laboral.");
    } else if (edad > 65) {
        console.log("Es jubilado.");
    } else {
        console.log("Es menor de edad.");
    }

    alert("Edad registrada: " + edad);
}

function realizarCalculos() {
    let salida = "";

    // Asignación
    let x = 10;
    let y = 5;
    salida += `Asignación: x = ${x}, y = ${y}<br>`;

    // Incremento y Decremento
    x++;
    y--;
    salida += `Incremento/Decremento: x++ = ${x}, y-- = ${y}<br>`;

    // Matemáticos
    let suma = x + y;
    let resta = x - y;
    let producto = x * y;
    let division = x / y;
    let modulo = x % y;
    salida += `Matemáticos: x+y=${suma}, x-y=${resta}, x*y=${producto}, x/y=${division}, x%y=${modulo}<br>`;

    // Relacionales
    salida += `Relacionales: x==y → ${x == y}, x>y → ${x > y}, x<=y → ${x <= y}<br>`;

    // Lógicos (AND, OR, Negación)
    let a = true;
    let b = false;
    salida += `Lógicos: a && b → ${a && b}, a || b → ${a || b}, !a → ${!a}<br>`;

    // Combinando operadores
    let edad = 20;
    let tienePermiso = true;

    if (edad >= 18 && tienePermiso) {
        salida += "Combinado (AND): Puede ingresar al entrenamiento.<br>";
    }

    if (edad < 18 || !tienePermiso) {
        salida += "Combinado (OR/Negación): No puede ingresar.<br>";
    }

    document.getElementById("resultadosCalculos").innerHTML = salida;
}
