// Función para generar la serie de Fibonacci
function fibonacciSeries(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo.slice(0, n); // Retorna solo la cantidad solicitada
}

// Función para manejar la entrada del usuario
function getFibonacci() {
    let input = document.getElementById("userInput").value;
    let num = parseInt(input);

    let resultDiv = document.getElementById("result");
    
    if (isNaN(num) || num <= 0) {
        resultDiv.innerHTML = "<p style='color: red;'>Por favor, ingresa un número válido mayor a 0.</p>";
    } else {
        let series = fibonacciSeries(num);
        resultDiv.innerHTML = `<p>Serie de Fibonacci (${num} números): ${series.join(", ")}</p>`;
    }
}
