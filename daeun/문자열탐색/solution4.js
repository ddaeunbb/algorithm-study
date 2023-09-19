// 4. 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.

function solution(s, t){
  const idx = [];
  const answer = [...s];
  const range = [-2,-1,1,2];
  
  for(let i = 0; i < s.length; i++){
    if(s[i] === t) idx.push(i);
  }

  for(let el of idx){
    answer[el] = 0;
    for(let space of range){
      const x = el + space;
     if(answer[x] !== undefined) answer[x] = Math.abs(space);
    }
  }

  return answer;
}

console.log(solution('teachermode','e'));

// [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]