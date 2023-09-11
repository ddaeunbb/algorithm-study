// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
// 성하세요.(첫 번째 수는 무조건 출력한다)

function solution(arr) {
  let prevnum = arr[0];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (prevnum <= arr[i]) {
      answer.push(arr[i]);
    }
    prevnum = arr[i];
  }
  console.log(answer);
}

solution([7, 3, 9, 5, 6, 12]);
