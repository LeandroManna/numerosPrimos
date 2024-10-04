// Función para verificar si un número es primo
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Lista de números primos
let primos = [2];
let index = 0;

// Función para encontrar el siguiente número primo
function siguientePrimo() {
    let siguiente = primos[primos.length - 1] + 1;
    while (!esPrimo(siguiente)) {
        siguiente++;
    }
    primos.push(siguiente);
    return siguiente;
}

// Evento de click izquierdo para avanzar al siguiente número primo
document.addEventListener("click", function(event) {
    if (event.button === 0) { // Botón izquierdo
        index++;
        if (index >= primos.length) {
            document.getElementById("number").textContent = siguientePrimo();
        } else {
            document.getElementById("number").textContent = primos[index];
        }
    }
});

// Evento de click derecho para retroceder al número primo anterior
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevenir menú contextual
    if (event.button === 2 && index > 0) { // Botón derecho
        index--;
        document.getElementById("number").textContent = primos[index];
    }
});
