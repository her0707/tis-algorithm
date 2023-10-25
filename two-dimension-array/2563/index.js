const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const [count, ...input] = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n");

const rows = 100;
const cols = 100;

const fullPaper = new Array(rows);

for (let i = 0; i < rows; i++) {
  fullPaper[i] = new Array(cols).fill(0);
}
input.forEach((v) => {
  const [x, y] = v.split(" ");
  for (let i = +x; i < 10 + +x; i++) {
    for (let j = +y; j < 10 + +y; j++) {
      fullPaper[i][j] = 1;
    }
  }
});

const answer = fullPaper
  .map((v) => v.reduce((acc, v) => acc + v))
  .reduce((acc, v) => acc + v);

console.log(answer);
