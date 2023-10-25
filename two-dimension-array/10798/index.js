const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const input = fs.readFileSync(inputPath).toString().trim().split("\r\n");

// const answer = input
//   .reduce((acc, v) => {
//     const arr = v.split("");
//     if (!acc.length) return arr.map((v) => [v]);

//     return acc.map((v, i) => [...v, arr[i]]);
//   }, [])
//   .map((v) => v.join(""))
//   .join("")
//   .trim();

// console.log(answer);

const maxLength = Math.max(...input.map((i) => i.length));
let vertical = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    vertical += input[j][i] || "";
  }
}
console.log(vertical);
