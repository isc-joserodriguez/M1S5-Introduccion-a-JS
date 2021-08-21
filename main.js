console.log('Hola desde el archivo');
//String
var nombre;
console.log(nombre);

nombre = "Pedro";
console.log(nombre);

nombre = 'Otro\' \' Nombre';
console.log(nombre);

const id = 1645;
console.log(id);

/* id=888; */

console.log("172973")

//Number
var num = 15;
var num2 = 10.5

console.log(num, num2);

console.log(100 / 0);
console.log("hola" * 5)

//Boolean
var condicion = false;
var condicion2 = true;

console.log(condicion, condicion2);

var variableNull = null;

console.log(variableNull);

//Coerción/Conversión de datos
//Declaro un tipo de dato numérico
var num = 5;
console.log(num)

console.log(String(num))
console.log(typeof String(num))
console.log((num + ''))
console.log(typeof (num + ''))

//Declaro un tipo de dato String

var numero = "-150"
console.log(numero);

console.log(+numero);
console.log(typeof (+numero));

console.log(Number(numero));
console.log(typeof (Number(numero)));


//Declaro un tipo de dato Numérico
var condicion2 = 1;
//   0 / 1
//Declaro un tipo de dato String
var condicion = "";

console.log(condicion2)
console.log(condicion)

console.log(Boolean(condicion2))

console.log(Boolean(condicion))

console.log(!!condicion2)

console.log(!!condicion)


/* if(Condicion){
//Se ejecuta este código si es true
}else if(Otra Condicion){

} else{
    //Se ejecuta si la condición es false
} */

//Condicional if/else
var respuesta = 'asdsa';
var mensaje = '';
if (respuesta === 3) {
    console.log('Respuesta correcta')
} else if (respuesta % 2 == 0) {
    console.log('La respuesta es par');
    mensaje = 'Entró como par';
} else if (respuesta === 2) {
    console.log('Casi!!')
} else {
    console.log('Respuesta incorrecta')
    mensaje = 'Todo mal!!';
}

console.log(mensaje);



//Switch

var respuesta = 398;

switch (respuesta) {
    case 3:
        console.log('Respuesta correcta');
        break;
    case 2:
        console.log('Casi!!!')
        break;
    default:
        console.log('Mal!!')
}
//for
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

//while
var l = 0;
while (l <= 10) {
    console.log(l);
    l++;
}

//do while

var l = 0;
do {
    console.log(l);
} while (l !== 0);


//Funciones

function miPrimeraFuncion(nombre) {
    console.log('Hola, qué tal? ' + nombre);
}

miPrimeraFuncion('Ramón');
miPrimeraFuncion(156);
miPrimeraFuncion(true);


var segundaFuncion = function (edad) {
    console.log('Esta es una expresión de función ' + edad);
}

segundaFuncion(15);


(function (nombre) {
    console.log('Hola, qué tal? ' + nombre);
})('Iván')