/* 조이스틱
문제 설명
조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

조이스틱을 각 방향으로 움직이면 아래와 같습니다.

▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.

따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 
이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요. */

const solution = (name) => {
  //reference
  let answer = 0;
  let min_move = name.length - 1;
  console.log(min_move);

  [...name].map((n, i) => {
    // name을 배열로 만들어서 map으로 순회하며 하나씩 처리
    // A에서 특정 문자로 가는 최소 거리 움직여야 하는 거리 책정(왼쪽과 오른쪽 중 더 min한 걸로)
    // 65는 A의 아스키코드, 91은 z의 아스키코드 90 + A -> Z 로가는 1회
    // 그리고 answer에 더해 줌
    console.log(n);

    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;
    console.log(n.charCodeAt() - 65, 91 - n.charCodeAt(), "answer", answer);
    console.log("while전 idx", idx);

    // 연속되는 A의 개수 count
    // 지금 확인하는 n이 끝 문자가 아니고, A일때 while문 들어간다.
    while (idx < name.length && name[idx] === "A") {
      idx++;
      console.log("while문 들어옴", idx);
    }

    console.log(
      "정방향 전진: ",
      min_move,
      "뒤로 돌아가기: ",
      i * 2 + name.length - idx,
      "뒤의 요소 먼저 입력: ",
      i + 2 * (name.length - idx)
    );
    min_move = Math.min(
      // 정 방향으로 전진
      min_move,
      // 뒤로 돌아가기
      i * 2 + name.length - idx,
      // 뒤의 요소를 먼저 입력하기
      i + 2 * (name.length - idx)
    );
    console.log(min_move, "채택");
  });

  return answer + min_move;
};
console.log(solution("JEROEN")); //	56
console.log(solution("JAN")); // 23
