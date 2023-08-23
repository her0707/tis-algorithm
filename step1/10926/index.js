const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const input = fs.readFileSync(inputPath).toString();

console.log(input + "??!");
