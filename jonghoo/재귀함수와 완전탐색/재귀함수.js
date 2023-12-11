// function solution(N){
//     if(N==0){
//         return
//     }
//     else {
//         solution(N-1);
//         console.log(N)
//     }
// }

// solution(3)


function answer(n){
    function DFS(L){
        if(L==0) return
        else {       
            DFS(L-1)
            console.log(L)
        }
        
    }
    DFS(n)
}

answer(3);


