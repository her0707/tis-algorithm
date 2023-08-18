/**
 * 1 부터 25까지 자연수를 한칸에 하나씩 쓴 5X5 빙고를 사회자가 몇번 쨰 수를 불렀을 때 빙고를 외치게 되는지 출력하는 프로그램을 작성
 *
 * 입력
 * 첫째 줄부터 다섯째 줄까지 빙고판에 쓰여진 수가 가장 위 가로줄부터 차례대로 한 줄에 다섯 개씩 빈 칸을 사이에 두고 주어진다.
 * 여섯째 줄부터 열째 줄까지 사회자가 부르는 수가 차례대로 한 줄에 다섯 개씩 빈 칸을 사이에 두고 주어진다.
 * 빙고판에 쓰여진 수와 사회자가 부르는 수는 각각 1부터 25까지의 수가 한 번씩 사용된다.
 *
 * 출력
 * 첫째 줄에 사회자가 몇 번째 수를 부른 후 철수가 "빙고"를 외치게 되는지 출력한다.
 */

function split(array) {
  return array.map((v) => v.split(" "));
}

let bingoNum = 0;

function bingo() {
  const fs = require("fs");
  const input = fs.readFileSync("bingo.txt").toString().split("\n");
  bingoNum = 0;
  const me = split(input.slice(0, 5));
  const announcer = input.slice(5, input.length).reduce((acc, v) => {
    acc.push(...v.split(" "));

    return acc;
  }, []);

  for (let x = 0; x < announcer.length; x++) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (me[i][j] === announcer[x]) {
          me[i][j] = "v";
        }
      }
    }

    colCheck(me);
    rowCheck(me);
    forwardCheck(me);
    backwardCheck(me);

    if (bingoNum >= 3) {
      console.log(x + 1);
      return x + 1;
    }
    bingoNum = 0;
  }
}

function colCheck(me) {
  // 가로
  for (let i = 0; i < 5; i++) {
    let count = 0;
    for (let j = 0; j < 5; j++) {
      if (me[i][j] === "v") {
        count++;
      }
    }
    if (count === 5) {
      bingoNum++;
    }
  }
}

function rowCheck(me) {
  // 세로

  for (let i = 0; i < 5; i++) {
    let count = 0;
    for (let j = 0; j < 5; j++) {
      if (me[j][i] === "v") {
        count++;
      }
    }
    if (count === 5) {
      bingoNum++;
    }
  }
}

function forwardCheck(me) {
  // 정 방향 대각선
  let count = 0;
  for (let i = 0; i < 5; i++) {
    if (me[i][i] === "v") {
      count++;
    }
  }
  if (count === 5) {
    bingoNum++;
  }
}

function backwardCheck(me) {
  // 역 방향 대각선
  let count = 0;
  for (let i = 0; i < 5; i++) {
    if (me[i][4 - i] === "v") {
      count++;
    }
  }

  if (count === 5) {
    bingoNum++;
  }
}

bingo();
