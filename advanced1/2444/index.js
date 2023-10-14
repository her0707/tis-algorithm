// 문제
// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const input = fs.readFileSync(inputPath).toString().trim();

// const line = 2 * Number.parseInt(input) - 1;

// const half = Math.ceil(line / 2);

// function printStarPlus(starCount) {
//   let num = starCount;
//   for (let i = 1; i <= half; i++) {
//     const starArray = Array.from({
//       length: half + (i - 1),
//     })
//       .map((_, i) => (i + 1 <= num ? "*" : " "))
//       .reverse();
//     console.log(starArray.join(""));

//     num += 2;
//   }
// }

// function printStarMinus() {
//   let num = line - 2;
//   for (let i = half + 1; i <= line; i++) {
//     const starArray = Array.from({
//       length: num + (i - half),
//     })
//       .map((_, i) => (i + 1 <= num ? "*" : " "))
//       .reverse();
//     console.log(starArray.join(""));

//     num -= 2;
//   }
// }

// printStarPlus(1);
// printStarMinus();

const arrStar = [];
const arrStar2 = [];

for (let i = 1; i <= +input; i++) {
  const star = " ".repeat(+input - i) + "*".repeat(2 * i - 1);
  arrStar.push(star);
  arrStar2.unshift(star);
}
arrStar2.shift();
arrStar.push(...arrStar2);
arrStar2.length = 0;
console.log(arrStar.join("\n"));
