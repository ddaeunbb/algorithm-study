function solution(answers){
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0,0,0];
  const answer = [];
  
  for (let i = 0; i < answers.length; i++){
      if (one[i % 5] === answers[i]) result[0]++;
      if (two[i % 8] === answers[i]) result[1]++;
      if (three[i % 10] === answers[i]) result[2]++;
  }
  
  let max = Math.max(...result);
  for(let j = 0; j < result.length; j++){
      if(result[j] === max) answer.push(j+1);
  }

  return answer
}