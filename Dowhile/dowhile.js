// prompt() -> 'ingresa un string'
// parseInt() -> 'convierte un string a un entero'
// parseFloat() -> 'devuelve un numero con coma'

// CLASE 4 - Simulador interactivo 
// EJEMPLO DE CALCULADORA

// const sumar = (num1, num2) => num1 + num2
// const restar = (num1, num2) => num1 - num2
// const dividir = (num1, num2) => num1 / num2
// const multiplicar = (num1, num2) => num1 * num2


// do = hacer
// while = mientras
// DO - WHILE: crea un bucle que ejecuta una sentencia especificada hasta que la condición de prueba se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, con lo que la sentencia especificada se ejecuta al menos una vez.

// do {
//     let numero1, numero2, operacion

//     do {
//         numero1 = parseFloat(prompt('Ingrese un numero'))
//         numero2 = parseFloat(prompt('Ingrese otro numero'))
//         operacion = prompt('Ingrese una operacion (+,-,/,*)')

//         if (isNaN(numero1) || isNaN(numero2)) {
//             console.log('Numero incorrecto');
//         }

//         if (numero2 === 0 && operacion == '/') {
//             console.log('No se puede dividir entre cero');
//         }
//     } while ((isNaN(numero1)) || isNaN(numero2) || (numero2 === 0 && operacion == '/'));

//     switch (operacion) {
//         case '+':
//             console.log(sumar(numero1, numero2));
//             break
//         case '-':
//             console.log(restar(numero1, numero2));
//             break
//         case '/':
//             console.log(dividir(numero1, numero2));
//             break
//         case '*':
//             console.log(multiplicar(numero1, numero2));
//             break
//         default:
//             console.log('Operacion no valida');
//     }

//     do {

//         respuesta = prompt('Desea ingresar otra operacion?').toLowerCase
//     } while (respuesta != 'si' && respuesta != 'no');

// } while (respuesta != no);


// CALCULADORA DE IVA SEGUN CIUDAD DESEADA
// El objetivo es simular una calculadora donde ingresemos los valores y nos devuelva el precio final que deberiamos poner a la venta. Utilizando dowhile, switch y variables.

// CALCULADORA DE IVA SEGUN LOCALIDAD
do {
    let num1, localidad

    do {
        alert('Bienvenido a la calculadora de IVA segun su provincia!')
        num1 = parseFloat(prompt('Ingrese un numero'))
        localidad = prompt('Ingrese (Matanza, Mataderos, Palermo, Belgrano) segun corresponda')

        if(isNaN(num1)){
            console.log('Numero incorrecto');
        }
    } while (isNaN (num1));

    switch(localidad){
        case 'Matanza':
            alert(num1 * 21 / 100)
            break;
        case 'Mataderos':
            alert(num1 * 28 / 100)
            break;
        case 'Palermo':
            alert(num1 * 38 / 100)
            break;
        case 'Belgrano':
            alert(num1 * 38 / 100)
            break;

        default:
            console.log('Operacion no valida');
    }

    do {

        respuesta = prompt('Desea ingresar otra operacion?').toLowerCase
    } while (respuesta != 'si' && respuesta != 'no');
} while (respuesta != no);