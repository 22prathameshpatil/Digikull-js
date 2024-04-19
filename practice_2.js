let y = 2024;

if (y % 4 === 0) {

    if (y % 100 === 0) {
        if (y % 400 === 0) {
            console.log(y + ' is leap year');
        }
        else {
            console.log(y + ' is not leap year');
        }
    }
    else {
        console.log(y + ' is leap year');
    }
}
else {
    console.log(y + ' is not leap year');
}