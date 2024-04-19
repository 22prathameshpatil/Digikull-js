let number = 55364;
let length = 0;

while (number !== 0) {
    number = Math.floor(number / 10);
    length++;
}
console.log(length);