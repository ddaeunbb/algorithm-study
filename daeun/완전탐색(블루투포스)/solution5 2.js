// 5. K번째 큰 수
// 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
// 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.

function solution(k, arr){
  let sorted = [...arr].sort((a,b)=> b-a);
  let possible = [];

  for(let i = 0; i < sorted.length-2; i++){
    for(let j = i+1; j < sorted.length-1; j++){
      for(let k = j+1; k < sorted.length; k++){
        possible.push(sorted[i]+sorted[j]+sorted[k]);
      }
    }
  }

  return possible[k];
}

console.log(solution(10, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));