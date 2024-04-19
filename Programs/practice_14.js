let wor = "   fefe fefef  fefef fefe dwd dwdw dwd wdwd wd";
Number = 1;
let tr = wor.trim();
console.log(tr);
for (let index = 0; index < tr.length; index++) {
    if (tr[index] === " ") {
        Number++;
    }
    if (tr[index] === " " && tr[index + 1] === " ") {
        Number--;
    }
}
console.log(Number);