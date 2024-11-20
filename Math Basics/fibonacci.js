// Fibonacci
function Fibonacci(n) {
    if (n == 1) return [0];
    if (n == 2) return [0, 1]

    const fib = [0, 1]; // For 1 and 2 
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    };
    return fib
};

console.log(Fibonacci(1))