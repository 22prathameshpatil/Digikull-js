let word = "javascript";
let result = "";

for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
        result += word[i].toUpperCase();
    } else {
        result += word[i];
    }
}

console.log(result);