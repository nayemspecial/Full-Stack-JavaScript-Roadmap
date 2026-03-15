let a = 10, b = 20, c = 30;
if ( a > b ){
    if ( a > c ){
        console.log(`${a} is the maximum number.`);
    } else {
        console.log(`${c} is the maximum number.`);
    }
} else {
    if ( b>c ){
        console.log(`${b} is the maximum number.`);
    } else {
        console.log(`${c} is the maximum number.`);
    }
}