// 문제
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// 입력
// 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const input = fs.readFileSync(inputPath).toString().trim().toLowerCase();

const count = input.split("").reduce((acc, v) => {
  if (!acc.has(v)) {
    acc.set(v, 1);
  } else {
    acc.set(v, acc.get(v) + 1);
  }

  return acc;
}, new Map());

let max = Math.max(...count.values());

let answer = [];

count.forEach((value, key) => {
  if (value === max) {
    answer.push(key);
  }
});

console.log(answer.length > 1 ? "?" : answer[0].toUpperCase());
