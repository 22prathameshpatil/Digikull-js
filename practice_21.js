let lines = 4;

for (let i = 1; i <= lines; i++) {
    let line = '';
    for (let j = 1; j <= lines-i; j++) {
        line += ' ';
    }
    for (let k = 1; k <= 2 * i -1 ; k++) {
        line += '*';
    }
    console.log(line);
}
lines -= 1;
for (let i = lines; i >= 1 ; i--) {
    let line = '';
    for (let j = 1; j <= lines- i+1 ; j++) {
        line += ' ';
    }
    for (let k = 1; k <= 2 * i - 1 ; k++) {
        line += '*';

    }
    console.log(line);
}