/* 완주하지 못한 선수
수많은 마라톤 선수들이 마라톤에 참여하였습니다.
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다. */

const solution = (participant, completion) => {
  // 예전 풀이
  /*
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
  */

  // 해시 사용한 풀이
  let hashMap = new Map();

  for (let person of participant) {
    if (hashMap.has(person)) {
      hashMap.set(person, hashMap.get(person) + 1);
    } else {
      hashMap.set(person, 1);
    }
  }

  for (let person of completion) {
    if (hashMap.has(person)) {
      hashMap.set(person, hashMap.get(person) - 1);
    }
  }

  for (let [key, value] of hashMap) {
    if (value > 0) return key;
  }
};

let participantA = ["leo", "kiki", "eden"];
let completionA = ["eden", "kiki"];

let participantB = ["mislav", "stanko", "mislav", "ana"];
let completionB = ["stanko", "ana", "mislav"];

console.log(solution(participantA, completionA)); // leo
console.log(solution(participantB, completionB)); // mislav
