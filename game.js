let line = [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1];
let result = [];
let count = 0;
for (let indexLine = 0; indexLine < line.length; ++indexLine) {
    if (line[indexLine] == 1) ++count;
    if ((count > 0) && (line[indexLine] == 0 || indexLine == line.length - 1)) {
        result.push(count);
        count = 0;
    }
}
console.log(result);