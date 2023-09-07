// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
// 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

//가장 긴변의 길이는 다른 두변 길이의 합보다 작아야 삼각형을 그릴수있다.

//solution1

function solution(a, b, c) {
  if (a + b < c) {
    console.log("NO");
  } else if (a + c < b) {
    console.log("NO");
  } else if (c + b < a) {
    console.log("NO");
  } else console.log("YES");
}

solution(6, 7, 11);
solution(13, 33, 17);

//solution2

function isTriangle(a, b, c) {
  const maxSide = Math.max(a, b, c);
  const sumOfOtherSides = a + b + c - maxSide;
  return sumOfOtherSides > maxSide;
}

const a = 13;
const b = 33;
const c = 17;

if (isTriangle(a, b, c)) {
  console.log("YES");
} else {
  console.log("NO");
}
