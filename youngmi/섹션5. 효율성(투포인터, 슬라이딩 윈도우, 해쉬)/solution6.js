/* 학급 회장(해쉬)
학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그
기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작
성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
입력설명
- 첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
- 두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로
- 문자열로 입력됩니다.
출력설명
- 학급 회장으로 선택된 기호를 출력합니다.  */

const solution = (s) => {
  let hashMap = new Map();

  // hash 맵 key-value 세팅
  hashMap.set("A", 0);
  hashMap.set("B", 0);
  hashMap.set("C", 0);
  hashMap.set("D", 0);
  hashMap.set("E", 0);

  // 각 후보의 득표 수 카운팅 for문
  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      const count = hashMap.get(s[i]);
      hashMap.set(`${s[i]}`, count + 1);
    }
  }

  // 최다 득표 후보자 선출
  let max = Number.MIN_SAFE_INTEGER;
  let answer = "";

  for (let [key, val] of hashMap) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
};

let str = "BACBACCACCBDEDE";
console.log(solution(str)); // C
