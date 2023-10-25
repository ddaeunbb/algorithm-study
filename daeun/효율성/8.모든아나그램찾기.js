// 8. 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

// 내가 푼 풀이
function solution(str1, str2){
  let answer = 0, result = "";
  const sH2 = new Map();
  for(let alpha of str2){
    if(sH2.has(alpha)) sH2.set(alpha, sH2.get(alpha) + 1);
    else sH2.set(alpha, 1);
  }

  for(let rt = 0; rt < str2.length; rt++) result += str1[rt];
  if(check(result, sH2)) answer++;
  for(let lt = str2.length; lt < str1.length; lt++){
    // 뽀가른다. 그리고 같다붙인다.
    // 그다음에 체킹하고 answer 수 구한다.
    result = result.substring(1);
    result += str1[lt];
    if(check(result, sH2)) answer++;
  }
  return answer
}

function check(result, sH2){
  const resultH = new Map();
  for(let alpha of result){
    if(resultH.has(alpha)) resultH.set(alpha, resultH.get(alpha) + 1);
    else resultH.set(alpha, 1);
  }
  
  for(let [key, val] of resultH){
    if(val !== sH2.get(key)) return false;
  }
  return true;
}


// 강사님 풀이


console.log(solution("bacaAacba", "abc"));
