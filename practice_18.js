let n = 6;

for (let i = 1; i <= n; i++) {
    let line = '';
    for (let index = 0; index < i; index++) {
        line += '*';
    }
    console.log(line);
}
