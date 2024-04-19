let num1 = 100;
let flag1 = true;

for (let i = 1; i <= Math.sqrt(num1); i++) {
    if (i * i === num1) {
        console.log("this is perfect square");
        flag1 = false;
        break;
    }
}
if (flag1 !== false ) {
    console.log("this is not perfect square");
}
