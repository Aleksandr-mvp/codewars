function addLetters(...letters) {
  
    let letterNum = 0;
    let alphabet = ['zero trolls', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < letters.length; i++) {
        letterNum += alphabet.indexOf(letters[i])
    }
    if(letters.length > 0){
    while (letterNum > 26) {
        letterNum -= 26;
    }
    return alphabet[letterNum]
    }
    return 'z';
};