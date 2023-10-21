// 문제
// N*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.

const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const [length, ...input] = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split("\n");

const [x, y] = length.split(" ");

function convertDimensionArr(arr, col) {
  let result = [];

  for (let i = 0; i < 2; i++) {
    const slice = arr.slice(i * col, (i + 1) * col);

    result.push(slice);
  }

  return result;
}

const [a, b] = convertDimensionArr(input, +x, +y);

const answer = a.map((v, i) => {
  const aArr = v.split(" ");
  const bArr = b[i].split(" ");

  return aArr.map((number, i) => +number + +bArr[i]).join(" ");
});

console.log(answer.join("\n"));
