/* 가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
력하는 프로그램을 작성하세요.  */

const solution = (s, t) => {
  let left = [];
  let right = [];
  let answer = [];

  let forwardT = null;
  // t문자에서 왼쪽으로 길이
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t || i === s.length - 1) {
      if (forwardT === null) {
        for (let j = i; j > 0; j--) {
          left.push(j);
          forwardT = i;
        }
      } else {
        for (let j = i - forwardT - 1; j >= 1; j--) {
          left.push(j);
        }
      }
      left.push(0);
      forwardT = i;
    }
  }

  forwardT = null;

  // t문자에서 오른쪽으로 길이
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t || i === s.length - 1) {
      if (forwardT === null) {
        for (let j = i; j >= 1; j--) {
          right.push(0);
          forwardT = i;
        }
      }
      for (let j = 1; j <= i - forwardT - 1; j++) {
        right.push(j);
      }
      right.push(0);
      forwardT = i;
    }
  }

  // left와 right 비교해서 작은 수 answer에 담기
  for (let k = 0; k < left.length; k++) {
    if ((s[k] !== t && left[k] === 0) || right[k] === 0) {
      answer.push(left[k] === 0 ? right[k] : left[k]);
    } else {
      answer.push(Math.min(left[k], right[k]));
    }
  }

  console.log("right", right);
  return answer;
};

// 선생님 풀이
// function solution(s, t) {
//   let answer = [];
//   let p = 1000;
//   for (let x of s) {
//     if (x === t) {
//       p = 0;
//       answer.push(p);
//     } else {
//       p++;
//       answer.push(p);
//     }
//   }
//   p = 1000;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) p = 0;
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p);
//     }
//   }
//   return answer;
// }

let str = "teachermode";
console.log(solution(str, "e")); // [1, 0, 1, 2, 1, 0, 1 ,2 ,2 ,1 ,0]
console.log(solution("lltltllltltlttll", "t")); // [2, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0 ,0 , 1, 2 ]
