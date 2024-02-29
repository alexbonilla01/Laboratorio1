// 1. Declarar dos variables
let entero = 5;
let decimal = 2.5;

// Operaciones
let suma = entero + decimal;
let resta = entero - decimal;
let multiplicacion = entero * decimal;
let division = entero / decimal;
let exponente = entero ** decimal;

// 2. Crear dos variables de tipo cadena de texto
let nombreCompleto = "Ricardo Alexander Alvarenga Bonilla";
let carnetEstudiante = "SMIS636219";

// Concatenación
let concatenacion = nombreCompleto + " " + carnetEstudiante;

// 3. Declarar un número y convertirlo a una cadena de texto
let numero = 10;
let numeroComoCadena = numero.toString();

// 4. Declarar una cadena que represente un número y convertirla a un número
let cadenaNumero = "15";
let cadenaComoNumero = Number(cadenaNumero);

// 5. Cálculo del peso
let masa = 70; // en kilogramos
let gravedadTierra = 9.8; // en m/s^2
let gravedadLuna = 1.622; // en m/s^2
let gravedadMarte = 3.72076; // en m/s^2
let gravedadMercurio = 3.7; // en m/s^2

let pesoTierra = masa * gravedadTierra; // en Newtons
let pesoLuna = masa * gravedadLuna; // en Newtons
let pesoMarte = masa * gravedadMarte; // en Newtons
let pesoMercurio = masa * gravedadMercurio; // en Newtons

// Mostrar los resultados en la página web
document.getElementById('resultados').innerHTML = 
    'Entero: ' + entero + '<br>' +
    'Decimal: ' + decimal + '<br>' +
    'Suma: ' + suma + '<br>' +
    'Resta: ' + resta + '<br>' +
    'Multiplicacion: ' + multiplicacion + '<br>' +
    'Division: ' + division + '<br>' +
    'Exponente: ' + exponente + '<br>' +
    'Concatenacion: ' + concatenacion + '<br>' +
    'Numero como cadena: ' + numeroComoCadena + '<br>' +
    'Cadena como numero: ' + cadenaComoNumero + '<br>' +
    'Peso en la Tierra: ' + pesoTierra + ' N' + '<br>' +
    'Peso en la Luna: ' + pesoLuna + ' N' + '<br>' +
    'Peso en Marte: ' + pesoMarte + ' N' + '<br>' +
    'Peso en Mercurio: ' + pesoMercurio + ' N';
