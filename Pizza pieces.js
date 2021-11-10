function maxPizza(cut) {
    if (cut < 0) return -1
    else if (cut == 0) return 1
    return (cut * (cut + 1) / 2) + 1
}