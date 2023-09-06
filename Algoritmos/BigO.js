// Big O notation nos indica la complejidad de un algoritmo
// y nos muestra la eficiencia de un algoritmo.

// ejemplo de Big O notation
// O(1) Constante
// O(n) Lineal
// O(n^2) Cuadratica

// ejemplo de O(1) Constante
function suma(a, b) {
    return a + b;
}
console.log(suma(5, 5));

// ejemplo de O(n) Lineal 
function suma(n) {
    let suma = 0;
    for (let i = 0; i <= n; i++) {
        suma += i;
    }
    return suma;
}

// console.log(suma(5));

// ejemplo de O(n^2) Cuadratica
function suma(n) {
    let suma = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            suma += 1;
        }
    }
    return suma;
}