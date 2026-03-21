let orderStatus = "delivered";

switch (orderStatus) {
    case "pending":
        console.log("Your order is being processed.");
        break;
    case "confirmed":
        console.log("Your order has been confirmed.");
        break;
    case "canceled":
        console.log("Your order has been canceled.");
        break;
    case "shipped":
        console.log("Your order has been shipped.");
        break;
    case "delivered":
        console.log("Your order has been delivered.");
        break;
    default:
        console.log("Unknown status.");
}