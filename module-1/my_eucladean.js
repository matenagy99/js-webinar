function eucladian(a, b) {
    let gcd;

    if (a > 0 && b > 0) {
        while (a !== b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
    } else {
        gcd = 0;
    }

    gcd = a;
    return gcd;
}

// console.log(eucladian(49,56));