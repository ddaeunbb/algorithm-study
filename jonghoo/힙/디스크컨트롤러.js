function solution(jobs) {
  var answer = 0;
  jobs.sort(function (a, b) {
    return a[1] - a[0] - (b[1] - b[0]);
  });
  let end = 0;
  for (let i = 0; i < jobs.length; i++) {
    answer += end - jobs[i][0];
    answer += jobs[i][1];
    end += jobs[i][1];
  }
  return answer / jobs.length;
}
