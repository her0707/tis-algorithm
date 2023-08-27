/**
 * 첫째 줄에 현재 시각이 띄어쓰기로 구분되어 제공되고 아랫줄에 요리하는데 소요되는 분이 제공된다
 * 요리가 끝나는 시간을 반환하라
 */

const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const [hour, minute, takeTime] = fs
  .readFileSync(inputPath)
  .toString()
  .split(" ")
  .reduce((acc, v, i) => {
    if (i === 0) {
      acc.push(Number(v));
    } else {
      acc.push(...v.split("\n").map((v) => Number(v)));
    }

    return acc;
  }, []);

const now = new Date();

now.setHours(hour);
now.setMinutes(minute);

now.setMinutes(now.getMinutes() + takeTime);

console.log(now.getHours(), now.getMinutes());
