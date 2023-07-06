//*****************TALLER DE EJERCICIOS BIT 06/07/2023************/


/*1. Valor: 0.5 - ¿Va a sobrevivir?
Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado 
por un par de poderosos dragones. 
cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.*/

function vaAsobrevivir(numeroDragones, numeroBalas) {
    let balasNecesarias = numeroDragones * 2;

    if (numeroBalas >= balasNecesarias){
        return true;
    } else{
        return false
    }
}






























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