function solucionarRompecabezas(N) {
    let var_A = 1;
    let var_B = 1;
    let var_C = 1;
    let var_D = 1;

    for (let i = 1; i <= N; i++) {
        let resultado = 3 * var_D + 1 * var_C + 4 * var_B + 1 * var_A;
        var_A = var_B;
        var_B = var_C;
        var_C = var_D;
        var_D = resultado;
    }

    return var_D % 10000000000; // últimos 10 dígitos de var_D
}

console.log(solucionarRompecabezas(10));
console.log(solucionarRompecabezas(100));
console.log(solucionarRompecabezas(Math.pow(2023, 100))); // 2023 elevado a la 100
