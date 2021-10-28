function save(sizes, hd) {
    for (var i = 0, a = 0; i < sizes.length; i++) {
        a += sizes[i];
        if (a > hd) return i;
    }
    return sizes.length;
}