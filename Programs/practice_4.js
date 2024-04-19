let i = parseInt(prompt("Enter a date"));

switch (i) {
    case 1:
        alert("Today is the 1st day of the month.");
        break;
    case 2:
        alert("Today is the 2nd day of the month.");
        break;
    case 3:
        alert("Today is the 3rd day of the month.");
        break;
    case 4:
        alert("Today is the 4th day of the month.");
        break;
    case 5:
        alert("Today is the 5th day of the month.");
        break;
    case 6:
        alert("Today is the 6th day of the month.");
        break;
    case 7:
        alert("Today is the 7th day of the month.");
        break;
    case 8:
        alert("Today is the 8th day of the month.");
        break;
    case 9:
        alert("Today is the 9th day of the month.");
        break;
    case 10:
        alert("Today is the 10th day of the month.");
        break;
    case 11:
        alert("Today is the 11th day of the month.");
        break;
    case 12:
        alert("Today is the 12th day of the month.");
        break;
    case 13:
        alert("Today is the 13th day of the month.");
        break;
    case 14:
        alert("Today is the 14th day of the month.");
        break;
    case 15:
        alert("Today is the 15th day of the month.");
        break;
    case 16:
        alert("Today is the 16th day of the month.");
        break;
    case 17:
        alert("Today is the 17th day of the month.");
        break;
    case 18:
        alert("Today is the 18th day of the month.");
        break;
    case 19:
        alert("Today is the 19th day of the month.");
        break;
    case 20:
        alert("Today is the 20th day of the month.");
        break;
    case 21:
        alert("Today is the 21st day of the month.");
        break;
    case 22:
        alert("Today is the 22nd day of the month.");
        break;
    case 23:
        alert("Today is the 23rd day of the month.");
        break;
    case 24:
        alert("Today is the 24th day of the month.");
        break;
    case 25:
        alert("Today is the 25th day of the month.");
        break;
    case 26:
        alert("Today is the 26th day of the month.");
        break;
    case 27:
        alert("Today is the 27th day of the month.");
        break;
    case 28:
        alert("Today is the 28th day of the month.");
        break;
    case 29:
        alert("Today is the 29th day of the month.");
        break;
    case 30:
        alert("Today is the 30th day of the month.");
        break;
    case 31:
        alert("Today is the 31st day of the month.");
        break;
    default:
        alert("Invalid input. Please enter a day between 1 and 31.");
        break;
}

//_______________________________________________________________
// 5. PROBLEM_ IDENTIFY HOW MANY NOTES REQUIRE_ 1 2 5 10 20 50 100 200 500

let ns = -12;

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
