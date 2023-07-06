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

function sumarLista (numeros) {
    let suma = 0;
    for (let i = 0; i< numeros.length; i++)
    suma += numeros [i];
}

    return suma;

let lista1 = [1, 5.2, 4, 0, -1];
let resultado1 = sumarLista(lista1);
console.log(resultado1);

let lista2 = [];
let resultado2 = sumarLista(lista2);
console.log(resultado2);

let lista3 = [-2.398];
let resultado3 = sumarLista(lista3);
console.log(resultado3);