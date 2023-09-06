// 2. 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// 첫 번째 풀이
// function solution(a,b,c){
//   let max = Math.max(a,b,c);
//   let sum = a + b + c - max;
//   if (max < sum) return 'YES'
//   return 'NO'
// }

// 두 번째 풀이
function solution(a,b,c){
  let max
  if ( a < b) max = b;
  else max = a;
  if( max < c ) max = c; 

  let sum = a + b + c - max;
  if (sum > max) return 'YES';
  return 'NO'
}

console.log(solution(6,7,11));
console.log(solution(13,33,17));