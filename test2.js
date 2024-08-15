for (let i = 1; i <= 10; i++) {
    let n = i;
    let digit = n % 10;
    n = Math.floor(n / 10);
    console.log(`Input: ${i}, n: ${n}, digit: ${digit}`);
}