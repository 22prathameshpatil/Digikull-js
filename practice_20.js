let inputStr = "HELLO";
let isValid = true;
let constr = "";

for (let index = 0; index < inputStr.length; index++) {
    if (inputStr[index] === " ") {

    } else {
        const element = inputStr[index];
        constr = constr + element;
    }
}
for (let element of constr) {
    if (element < 'A' || element > 'Z') {
        isValid = false;
        break;
    }
}
if (isValid) {
    console.log("The string contains all capital letters");
} else {
    console.log("The string contains non-capital letters");
}
