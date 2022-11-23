const calculateValue = (number: number): number => {
    if (number < 1) {
        return 0;
    }
    let a = 0;
    let b = 1;
    for (let i = 1; i < number; ++i) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Usage example:

for (let n = 0; n < 10; ++n) {
    const value = calculateValue(n);
    console.log("f(" + n + ")=" + value);
}
