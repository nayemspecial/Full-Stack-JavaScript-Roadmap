let a = 10, b = 20, c = 30;

let max = (a > b)
? (a > c ? a : c)
: (b > c ? b : c);
console.log("Maximum number is", max);