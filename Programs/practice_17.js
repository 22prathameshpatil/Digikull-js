let str2 = "aeiou";
str2.toLowerCase();
count = 0;

for (const iterator of str2) {
    if (iterator === "a" || iterator === "e" || iterator === "i" || iterator === "o" || iterator === "u") {
        count++;
    }
}
console.log(count);