let a1 = 0,b1= 1;
console.log(a1);
console.log(b1);
let number = 20;

for (let i = 2; i <number; i++) {
   let next = a1+b1;
    a1=b1;
    b1=next;
console.log(next);

}

