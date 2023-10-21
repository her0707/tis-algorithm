const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const input = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n")
  .map((num) => num.split(" "));

const answer = input.reduce(
  (acc, v, i) => {
    const max = Math.max(...v);
    if (max > acc[0]) {
      return [max, i + 1, v.findIndex((val) => +val === max) + 1];
    }

    return acc;
  },
  [0]
);

function printAnswer(answer) {
  return answer[0]
    ? `${answer[0]}\n${answer[1]} ${answer[2]}`
    : `${answer[0]}\n1 1`;
}

console.log(printAnswer(answer));
