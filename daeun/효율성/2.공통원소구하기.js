// 2. A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

function solution(arr1, arr2){
  const answer = [];
  arr1.sort((a,b)=> a-b);
  arr2.sort((a,b)=> a-b);
  
  let n = arr1.length;
  let m = arr2.length;
  let p1 = p2 = 0;

  while(p1 < n && p2 < m){
    if(arr1[p1] === arr2[p2]){
      answer.push(arr1[p1++]);
      p2++;
    }
    else if(arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
}

console.log(solution([1,3,9,5,2], [3,2,5,7,8]));