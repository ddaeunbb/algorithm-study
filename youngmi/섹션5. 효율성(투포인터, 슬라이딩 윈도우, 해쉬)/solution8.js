/* 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
입력설명
- 첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
- S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
출력설명
- S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다. */

//슬라이딩 윈도우의 경우에는 일정한 사이즈를 가지는 윈도우를 나타내는 처음과 끝 포인터가 함께 움직인다.

// 두개의 map 비교하는 함수. 같으면 true 리턴
const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
};

const solution = (s, t) => {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  // tH map에 t문자열 사전 정리
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  // sH map에 s문자열 사전 정리
  // 이때 t문자열의 길이만큼만 일단 넣어 줌.
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  //포인터 선언
  let lt = 0;

  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareMaps(sH, tH)) answer++;

    sH.set(s[lt], sH.get(s[lt]) - 1);

    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
};

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
