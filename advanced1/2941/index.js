const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const input = fs.readFileSync(inputPath).toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  let answer = input;
  for (const alphabet of croatia) {
    answer = answer.split(alphabet).join("a");
  }

  return answer.length;
}

console.log(solution(input));
