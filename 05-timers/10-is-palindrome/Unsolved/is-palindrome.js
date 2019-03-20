// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    let median = Math.floor(str.length / 2);
    for (i = 0; i < median; i++){
        if (!(str[i] === str[str.length - 1 - i])) return false
    };
    return true    
};
