let string = "Prathamesh";
let indexToRemove = 7;

if (indexToRemove >= 0 && indexToRemove < string.length) {
    string = string.slice(0, indexToRemove) + string.slice(indexToRemove + 1);
    console.log("Result", string);
}
else {
    console.log("plese enter valid index number");
}