function solution(N, number) {
  var answer = 0;
  var use = Array.from(new Array(9), () => new Set());

  if(N == number) return 1;
  else {
      use.forEach((element, index) => {
          if (index !== 0) element.add(Number(String(N).repeat(index)));
      });

      for(var i=1 ; i<=8 ; ++i) {
        // 만약 i가 2이면 j는 1까지만, 즉, 2
          for(var j=1 ; j<i ; ++j) {
              for(var first of use[j]) {
                  for(var second of use[i-j]) {
                    console.log('현재 j는:', j)
                    console.log(use[j])
                    console.log('현재 i는:', i)
                    console.log(use[i]);
                    console.log(first, second);
                      use[i].add(first+second);
                      use[i].add(first-second);
                      use[i].add(first*second);
                      use[i].add(first/second);
                    console.log('현재 use결과는', use)
                  }
              } 
          }
          if(use[i].has(number)) return i;
      }
      return -1;
  }
}


console.log(solution(5, 12)); // 4