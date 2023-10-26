/* 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
입력설명
- 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
- S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
출력설명
- S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다. */

//슬라이딩 윈도우의 경우에는 일정한 사이즈를 가지는 윈도우를 나타내는 처음과 끝 포인터가 함께 움직인다.

// solution8번 문제 안 보고 다시 코딩해보기!
const solution = (str1, str2) => {
  let answer = 0;
  let str1H = new Map();
  let str2H = new Map();

  for (let i = 0; i < str2.length; i++) {
    if (str2H.has(str2[i])) {
      str2H.set(str2H, str2H.get(str2[i]) + 1);
    } else {
      str2H.set(str2[i], 1);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (str1H.has(str1[i])) {
      str1H.set(str1H, str1H.get(str1[i]) + 1);
    } else {
      str1H.set(str1[i], 1);
    }
  }

  let lt = 0;

  for (let rt = str2.length - 1; rt < str1.length; rt++) {
    if (str1H.has(str1[rt])) {
      str1H.set(str1[rt], str1H.get(str1[rt]) + 1);
    } else {
      str1H.set(str1[rt], 1);
    }

    if (compareMaps(str1H, str2H)) answer++;

    str1H.set(str1[lt], str1H.get(str1[lt]) - 1);
    if (str1H.get(str1[lt]) === 0) str1H.delete(str1[lt]);

    lt++;
  }

  return answer;
};

const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;

  for ([key, count] of map1) {
    // map1의 key를 map2가 가지고 있지 않거나, 가지고 있더라도 그 value값이 다르면 false 반환
    if (!map2.has(key) || map2.get(key) !== count) return false;
  }

  return true;
};

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
