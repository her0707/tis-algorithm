const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const input = fs.readFileSync(inputPath).toString().split("\n");

function makeResult() {
  const result = [];
  for (let i = 0; i < input[1].length; i++) {
    result.push(Number(input[0]) * Number(input[1][i]));
  }
  const newArray = result
    .reverse()
    .map((v, i) => Number(v.toString() + "0".repeat(i)));

  result.push(newArray.reduce((acc, v) => acc + v));

  return result;
}

const result = makeResult();

for (const r of result) {
  console.log(r);
}
