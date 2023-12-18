function solution(n,m){
    let check=Array.from({length:n},()=>0)
    let answer=0;
    function DFS(L){
        if(L==m){
            let count=0;
            let tmp=[]
            console.log(`Step ${L}:`, check);
            for(let i=0;i<check.length;i++){
                if(check[i]==1){
                    tmp.push(i+1)
                    count++
                }
            }            
            if(count==2){             
                answer++
            }

        }
        else {
            
            for(let i=0;i<n;i++){
                
                check[i]=1;
                DFS(L+1)
                check[i]=0;
            }

        }
    }
    DFS(0)
    return answer

}
console.log(solution(4,2));

// function solution(n, m) {
//     let answer = 0;
//     let check = Array.from({ length: n }, () => 0);

//     function DFS(L, start) {
//         if (L === m) {
            
//             answer++;
//             return;
//         }

//         for (let i = start; i < n; i++) {
//             check[i] = 1;
//             DFS(L + 1, i + 1);
//             check[i] = 0;
//         }
//     }

//     DFS(0, 0);
//     return answer;
// }

// console.log(solution(4, 2));
