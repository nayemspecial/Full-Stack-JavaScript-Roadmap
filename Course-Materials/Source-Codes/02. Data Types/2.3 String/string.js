let userName = "Nayemur Rahman";
let userCity = "Khulna";
let userCountry = "Bangladesh";
let appName = "ProjuktiPlus";
let course = "JavaScript Basic";
let orderId = 2451;
let amount = 1400;

console.log("Welcome to " + appName);
console.log("Welcome to " + appName + ", " + userName);
console.log(`Welcome to ${appName}, ${userName}`);
console.log(`Your selected course is ${course}`);

console.log(`Order #${orderId} has been successfully placed.`);
console.log(`Total amount to pay $${amount}`);

console.log("Order Details:\n------------");
console.log("Customer:\t" + userName);
console.log("Location:\t" + userCity + ", " + userCity);

console.log("Prouduct name: \"JavaScript Guide Book\"");
console.log("Author's note: ");


let invoice = `Invoice Summary
-------------------
Customer: ${userName}
City: ${userCity}
Order ID: ${orderId}
Amount: ${amount}
Course: ${course}`;

console.log(invoice);