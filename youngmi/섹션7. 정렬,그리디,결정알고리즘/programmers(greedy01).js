/* 체육복
문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
- 전체 학생의 수는 2명 이상 30명 이하입니다.
- 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
- 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
- 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
- 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다. */

const solution = (n, lost, reserve) => {
  let answer = n - lost.length;
  console.log("참여가능: ", answer);

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let student of reserve) {
    if (lost.includes(student)) {
      console.log("가진애가 잃어버림");
      lost = lost.filter((item) => item != student);
      reserve = reserve.filter((item) => item != student);
      answer++;
    }
  }

  console.log(lost, reserve);

  while (reserve.length && lost.length) {
    if (reserve[0] !== lost[0]) {
      console.log("lost", lost[0], "한테 ", reserve[0], "이 빌려줌");
      if (reserve[0] === lost[0] + 1 || reserve[0] === lost[0] - 1) {
        lost.shift();
        reserve.shift();
        answer++;
      } else {
        reserve.shift();
      }
      console.log(
        "현재 참여 가능 인원: ",
        answer,
        "현재 lost & reserve",
        lost,
        reserve
      );
    } else if (reserve[0] === lost[0]) {
      console.log("나도 여벌 이제 없음", lost[0]);
      lost.shift();
      reserve.shift();
      answer++;
      console.log(
        "현재 참여 가능 인원: ",
        answer,
        "현재 lost & reserve",
        lost,
        reserve
      );
    }
  }
  return answer;

  // reference
  /*
  var answer = n - lost.length;
  // 처음 가능한 학생수 = n - lost.length
  // 정렬해 주는 이유는 n=5, [4,2], [3,5]와 같은 케이스 때문
  // -> 바른 return 값은 5인데 정렬하지 않으면 순서대로 배열을 순회하게되어서 4번학생은 3번에게 빌려주게 되고, 
  //    2번학생은 결국 여분 체육복을 받지 못해서 체육수업에 참여할 수 없기 때문에 총 가능한 학생수가 4명이 된다.

  // 1. lost, reserve 배열에서 같은 학생이 포함되어있으면 그 학생을 lost, reserve 배열에서 제외하고 시작한다. + answer++
  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  answer += lost.length - realLost.length;

  // 2. 찐 잃어버린 리스트를 정렬해준다. 
  realLost.sort((a, b) => a - b);

  // 3. 찐 잃어버린 리스트 하나씩 돌면서 확인
  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      // 빌려줄 애 없으면 return해서 끝냄 
      return;
    }

    if (realReserve.includes(l - 1)) {
      // 앞 번호 애가 여분 체육복 있으면 
      // 빌려주게 하고(즉, answer++ 하고) 여분 체육복 가진 학생 리스트에서 지워주기 
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      // 뒷 번호 애가 여분 체육복 있으면 
      // 빌려주게 하고(즉, answer++ 하고) 여분 체육복 가진 학생 리스트에서 지워주기 
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  return answer;
  */
};

let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
console.log(solution(n, lost, reserve)); // 5
console.log(solution(5, [4, 5], [3, 4])); // 4
console.log(solution(5, [3, 4], [4, 3])); // 5
console.log(solution(2, [1, 2], [1, 2])); // 2
