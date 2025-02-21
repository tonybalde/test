/*

Una computadora inicia su proceso imprimiendo las cifras 2023, 2024 y 2025. A continuación, no se detiene y prosigue imprimiendo 
la suma de los tres números más recientes que ha impreso: 6072, 10121, 18218, etc. ¿Podrías decir cuáles son las últimas cuatro 
cifras del número impreso en el puesto 2023202320232023? Para ilustrar, en la posición 50, el número impreso es 8188013234823360,
que concluye en 3360.

*/

// 2023 + 2024 + 2025 = 6072, este es el resultado de la sumatoria en la 1era posicion. Siempre suma 9 ?? no es lo que pide creo..
// 6072 + 9 = 6081
// 6081 + 9 = 6090
/*

MI LOGICA HASTA AHORA:

Tengo que pasar de 6072 a 10121 y de 10121 a 18218

** 10121 - 6072 = 4049 (Esta es la dif entre ambos numeros) **

En la primera(1) pasada del bucle FOR solo hace la sumatoria de los años y devuelve el resultado:
    2023 + 2024 + 2025 = 6072

En la segunda(2) pasada del ciclo FOR los años de year1, year2 y year3 aumentan en 1

    valor year1 + valor year2 = 4049 (es el valor que arroja de hacer: 10121 - 6072 [que es la sumatoria inicial] )
        2024    +     2025    = 4049 <-- esta es la diferencia que le sumo a 6072 para llegar a: 10121

    sumatoria inicial + sumatoria de los valores nuevos de year1 y year2       obtengo el valor de la siguiente sumatoria
        6072       +                     4049                           =        10121

Para tercera(3) pasada del bucle necesito incrementar la sumatoria a 18218...
    valor de year1 ahora es: 2025       year1 + year2 = 4051            
    valor de year2 ahora es: 2026       4051 x 2 = 8102 (no da con esto)
                                        4049 x 2 = 8098 + 10121 = 18219 (casi, pero se pasa en 1)

*/

var year1 = 2023;
var year2 = 2024;
var year3 = 2025;

var sum = year1 + year2 + year3;

function sumN(n) {
    if (n < 1) {
        return sum;
    } else {
        for (let i = 0; i < n; i++) {
            sum += 9;
        }
        return sum - 9; // Adjusted to subtract the extra 9 from the last iteration
    }
}

console.log(sumN(50));


// Si pongo 50 posiciones en vez de darme como resultado: 8188013234823360 que es lo que pide
// me devuelve en su lugar: 6513


