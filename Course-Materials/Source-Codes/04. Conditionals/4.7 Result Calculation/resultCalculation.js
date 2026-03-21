let marks = parseInt(prompt("Enter your marks"));

switch (true) {
    case ( marks >= 80 && marks <=100):
        console.log("Your Grade: A+");
        break;
    case ( marks >= 70 && marks <=79):
        console.log("Your Grade: A");
        break;
    case ( marks >= 60 && marks <=69):
        console.log("Your Grade: A-");
        break;
    case ( marks >= 50 && marks <=59):
        console.log("Your Grade: B");
        break;
    case ( marks >= 40 && marks <=49):
        console.log("Your Grade: C");
        break;
    case ( marks >= 33 && marks <=39):
        console.log("Your Grade: D");
        break;
    case ( marks >= 0 && marks <=32):
        console.log("Your Grade: F");
        break;
    default: 
        console.log("Invalid Input! Please Enter number from 0 to 100");
}