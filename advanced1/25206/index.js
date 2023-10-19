const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const gradeObj = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const input = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" "))
  .reduce(
    (acc, v) => {
      const [part, score, grade] = v;

      if (grade !== "P") {
        return [
          acc[0] + Number(score),
          acc[1] + Number(score) * gradeObj[grade],
        ];
      }

      return acc;
    },
    [0, 0]
  );

console.log(input[1] / input[0]);
