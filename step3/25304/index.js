/**
 * 영수증
 */

// 첫째 줄에는 영수증에 적힌 총 금액 X가 주어진다.
// 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 N이 주어진다.
// 이후 N개의 줄에는 각 물건의 가격 a와 개수 b가 공백을 사이에 두고 주어진다.
// 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.

const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");
const [total, totalCount, ...products] = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\n");

if (Number(totalCount) !== products.length) return console.log("No");

const sum = products.reduce((acc, v) => {
  const [price, count] = v.split(" ").map((v) => Number(v));

  acc += price * count;

  return acc;
}, 0);

if (sum !== Number(total)) return console.log("No");

console.log("Yes");

// const fs = require("fs");
// const [total, totalCount, ...products] = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// if (totalCount !== products.length) return console.log("No");

// const sum = products.reduce((acc, v) => {
//   const [price, count] = v.split(" ").map((v) => Number(v));

//   acc += price * count;

//   return acc;
// }, 0);

// if (sum !== Number(total)) return console.log("No");

// console.log("Yes");
