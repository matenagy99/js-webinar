function fibonacci(n) {
    let fib;
    if (n >= 0){
        if (n < 2) {
            fib = n;
        }else {
            fib = fibonacci(n - 2) + fibonacci(n - 1);

            /*let f0 = 0;
            let f1 = 1;
            for (let i = 0; i < n; i++){
                    fib = f0 + f1;
                    f0 = f1;
                    f1 = fib;
                }
            */
        }
    }
    return fib;
}

// console.log(fibonacci(8));