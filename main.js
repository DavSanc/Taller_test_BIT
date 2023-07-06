//*****************TALLER DE EJERCICIOS BIT 26/06/2023************/


// 1. Valor: 0.5 - ¿Va a sobrevivir?
// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado 
//por un par de poderosos dragones. 
//cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

// function vaAsobrevivir(numeroDragones, numeroBalas) {
//     let balasNecesarias = numeroDragones * 2;

//     if (numeroBalas >= balasNecesarias){
//         return true;
//     } else{
//         return false
//     }
// }

/** 2. Sumar valores de una lista Escribe una función que tome una lista de números 
 * y devuelva la suma de los números. Los números pueden ser negativos o no enteros. 
 * Si la lista no contiene ningún número, debe devolver 0.
Resultados esperados */

// function sumarLista (numeros) {
//     let suma = 0;
//     for (let i = 0; i< numeros.length; i++)
//     suma += numeros [i];
// }

//     return suma;

// let lista1 = [1, 5.2, 4, 0, -1];
// let resultado1 = sumarLista(lista1);
// console.log(resultado1);

// let lista2 = [];
// let resultado2 = sumarLista(lista2);
// console.log(resultado2);

// let lista3 = [-2.398];
// let resultado3 = sumarLista(lista3);
// console.log(resultado3);





/* 3. ¿Qué tan bueno eres realmente?*
Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa.
Quiere saber si es mejor que el estudiante promedio de su clase.
Recibe una lista con los puntajes de las pruebas de sus compañeros.
¡Ahora calcule el promedio y compare su puntaje!
¡Devuelve True si estás mejor, de lo contrario False!
Nota: Sus puntos no están incluidos en la lista de puntos de su clase. 
¡Para calcular el punto promedio, puede agregar su punto
a la lista dada!
*/
function mejorPuntaje(puntajes, tuPuntaje) {
    let suma = 0;
    let totalPuntajes = puntajes.length + 1;
    for (let i = 0; i < puntajes.length; i++) {
        suma += puntajes[i];
    }
    let promedioClase = (suma + tuPuntaje) / totalPuntajes;
    return tuPuntaje > promedioClase
}

let puntajesCompaneros = [3.5, 2.8, 4.5];
let tuPuntaje = 4.6;
let resultado = mejorPuntaje(puntajesCompaneros, tuPuntaje)
console.log(resultado);




























/** 3.   Contar por X
 * Cree una función con dos argumentos que devolverá una lista de los primeros n múltiplos de x.
 * Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.
 * Devuelve los resultados como una lista.
 * Ejemplos

Entrada:    countBy( 1, 10 );
Salida:     [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

Entrada:    countBy( 2, 5 );
Salida:     [ 2, 4, 6, 8, 10 ]
 */