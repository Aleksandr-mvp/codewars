function solve(arr) {
    let alphabeth = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((y, i) => i == alphabeth.indexOf(y)).length);
};