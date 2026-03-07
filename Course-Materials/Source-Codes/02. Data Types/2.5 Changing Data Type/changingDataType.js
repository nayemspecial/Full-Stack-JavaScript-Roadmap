/*
Changing Data Type
    1.String to Number(Integer / Float)
        parseInt()
        parseFloat()
        Number()
        +variable
    2.Number to String
        String()
        .toString
    3.Float to Integer
        parseInt()
    4.Integer to Float
        parseFloat()
*/
var numStr = "10";
console.log(parseInt(numStr));
console.log(Number(numStr));
console.log(+numStr);


var numStr = "10.20";
console.log(parseFloat(numStr));
console.log(Number(numStr));
console.log(+numStr);

var num = 10;
var str = String(num);
console.log(str);
console.log(typeof(str));

var num = 10;
var str = num.toString();
console.log(str);
console.log(typeof(str));


var float = 20.40;
console.log(parseInt(float));

var numInt = 20;
var newNum = parseFloat(numInt)
console.log(newNum);
console.log(typeof(newNum));

var priceOne = "30.40";
var priceTwo = "40.20";
var totalPrice = parseFloat(priceOne) + parseFloat(priceTwo);
console.log(totalPrice);
