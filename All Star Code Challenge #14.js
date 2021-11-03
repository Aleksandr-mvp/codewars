function median(array) {
    array = array.sort((a, b) => a - b)
    if (array.length % 2 === 0) {
        let arr = array.slice(Math.floor(array.length / 2) - 1, Math.ceil(array.length / 2) + 1)
        return arr.reduce((a, b) => a + b, 0) / arr.length
    }
    return array.slice(Math.floor(array.length / 2), Math.ceil(array.length / 2)) * 1
}