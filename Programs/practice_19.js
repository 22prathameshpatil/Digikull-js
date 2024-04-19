let number = 32343;
let flag = true;

for (let index = number; index > number / 2; index--) {
    number = number / 2;
    if (number === 2) {
        console.log("this is power of two");
        flag = false;
        break;
    }
}

if (flag) {
    console.log("this is not power of two");
}