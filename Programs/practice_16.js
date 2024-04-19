let Str = "123grgrgrgr45";
let contdigit = true;

for (let i = 0; i < Str.length; i++) {
    let element = Str[i];
    if (element < '0' || element > '9') {
        contdigit = false;
        break;
    }
}

if (contdigit) {
    console.log("The string contains only digits.");
} else {
    console.log("The string contains character also");
}