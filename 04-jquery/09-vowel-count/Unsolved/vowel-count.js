// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let count = 0;
    let stringHolder = str.toLowerCase();
    for (let i=0; i < str.length; i++){
        if ((stringHolder[i] === "a") || (stringHolder[i] === "e") || (stringHolder[i] === "i") ||
         (stringHolder[i] === "o") || (stringHolder[i] === "u")) count++
    }
    return count;
};
