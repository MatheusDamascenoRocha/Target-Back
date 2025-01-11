function fibonacci(num) {
    if (num < 0) {
        return console.log("não pertence à sequência de Fibonacci") ;
    }

    let a = 0;
    let b = 1;

    while (b <= num) {
        let proximo = a + b;
        a = b;
        b = proximo;

        if (b == num) {
            return console.log("pertence à sequência de Fibonacci.");
        }
    }

    return console.log("não pertence à sequência de Fibonacci.");
}
fibonacci(10)