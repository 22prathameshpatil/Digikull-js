let ns = 12;

if (ns >= 500) {
    let n = ns / 500;
    ns = ns % 500;
    console.log("Required 500 notes are :", Math.floor(n));
}
if (ns >= 200) {
    let n = ns / 200;
    ns %= 200;
    console.log("Required 200 notes are :", Math.floor(n));
}
if (ns >= 100) {
    let n = ns / 100;
    ns %= 100;
    console.log("Required 100 notes are :", Math.floor(n));
}
if (ns >= 50) {
    let n = ns / 50;
    ns %= 50;
    console.log("Required 50 notes are :", Math.floor(n));
}
if (ns >= 20) {
    let n = ns / 20;
    ns %= 20;
    console.log("Required 20 notes are :", Math.floor(n));
}
if (ns >= 10) {
    let n = ns / 10;
    ns %= 10;
    console.log("Required 10 notes are :", Math.floor(n));
}
if (ns >= 5) {
    let n = ns / 5;
    ns %= 5;
    console.log("Required 5 notes are :", Math.floor(n));
}
if (ns >= 2) {
    let n = ns / 2;
    ns %= 2;
    console.log("Required 2 coins are :", Math.floor(n));
}
if (ns >= 1) {
    let n = ns / 1;
    ns %= 1;
    console.log("Required 1 coins are :", Math.floor(n));
}
if (ns <= 0) {
    console.log("Please enter higher values than 0");
}