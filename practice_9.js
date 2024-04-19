let num = 1;
let revenum = 0;

while (num !== 0) {
    let digit = num % 10;
    revenum = revenum * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(revenum); 