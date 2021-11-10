function finance(n) {
    let sum = 0;
    let current_sum;
    for (let i = 0; i <= n; i++) {
        current_sum = (2 * i + 2 * i + (n - i)) * (n + 1 - i) / 2
        sum += current_sum
    }
    return sum;
}