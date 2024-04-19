let str = "racecar";
let reverse = "";

for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    reverse = reverse + element;
}
console.log(reverse);

if (str === reverse) {
    console.log("This is a palindrome.");
} else {
    console.log("This is not a palindrome.");
}