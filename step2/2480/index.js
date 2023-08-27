// 주사위 세개

// 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

const fs = require("fs");
const path = require("path");
const inputPath = path.join(__dirname, "input.txt");

const questions = fs.readFileSync(inputPath).toString().split("\n\n");

for (const question of questions) {
  const count = question.split(" ").reduce((acc, v) => {
    if (!acc[v]) {
      acc[v] = 1;
    } else {
      acc[v] += 1;
    }

    return acc;
  }, {});

  const keys = Object.keys(count);

  switch (keys.length) {
    case 3:
      const max = Math.max(...keys.map((v) => Number(v)));

      console.log(max * 100);
      break;

    case 2:
      const idx = Object.values(count).indexOf(2);

      console.log(1_000 + Number(keys[idx]) * 100);
      break;

    case 1:
      console.log(10_000 + Number(keys[0]) * 1_000);
      break;
  }
}
