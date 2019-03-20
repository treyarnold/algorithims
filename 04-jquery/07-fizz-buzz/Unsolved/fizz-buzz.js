// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let message = "";
        if (arr[i] % 3 === 0) message += "Fizz"
        if (arr[i] % 5 === 0) {
            if (message === "") {
                message += "Buzz";
            } else {
                message += " Buzz";
            }}
        if (message === "") console.log(arr[i]);
        else console.log(message);
    }
};
