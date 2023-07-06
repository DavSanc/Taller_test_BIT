//*****************TALLER DE EJERCICIOS BIT 26/06/2023************/


// 1. Valor: 0.5 - ¿Va a sobrevivir?
// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado 
//por un par de poderosos dragones. 
//cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

function vaAsobrevivir(numeroDragones, numeroBalas) {
    let balasNecesarias = numeroDragones * 2;

    if (numeroBalas >= balasNecesarias){
        return true;
    } else{
        return false
    }
}