/*
Data Types
    1. Primitive (Immutable - ভ্যালু পরিবর্তন করা যায়না)
        1. Number - Integer , Floating Point
            let price = 135 or 23.5;
        2. String - Text
            let name = "nayem";
        3. Boolean - True or False
            let isStudent = false;
        4. null - Empty Value
            let amount = null;
        5. Undefined - Value not assigned
            let address;
        6. Symbol - unique identifire
            let uniqueId = Symbol("id");
        7. BigInt - very large integer
            let bigNumber = 123456789012345678901234567890n;

    2. Non-primitive ( Mutable - Value পরিবর্তন করা যায়)
        1. Object
        2. Array
        3. Function (Object)
*/

let product = {
    name: "Mobile",
    price: 20000
}

let fruits = ["Mango", "Banana", "Orange", "Apple"];
fruits[2] = "Lychee";
console.log(fruits);

let text = "ProjuktiPlus";
text[0] = "N";
console.log(text[0]);

let numOne = 4;
let numTwo = 4;

console.log( numOne === numTwo );

let userOne = {
    name: "Nayem",
    country: "Bangladesh"
}

let userTwo = {
    name: "Nayem",
    country: "Bangladesh"
}

console.log( userOne === userTwo );