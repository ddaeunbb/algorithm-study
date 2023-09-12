// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
// 프로그램을 작성하세요.

function solution(string) {
  let result = "";
  if (string.toUpperCase() === string) {
    for (x of string) {
      if (x === "A") {
        result += "#";
      } else {
        result += x;
      }
      // result=result.replace(/A/g, "#");
    }
  } else {
    console.log("대문자가아닙니다.");
  }
  console.log(result);
}

solution("BaNANA");
