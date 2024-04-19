let names = "           ffef dw dwdwdwdd wdwdwdw";
let constr1 = "";

for (let index = 0; index < names.length; index++) {
    if (names[index] === " ") {

    } else {
        const element = names[index];
        constr1 = constr1 + element;
    }
}
console.log(constr1);
