function solution(N){
    if(N==0){
        return
    }
    else {
        solution(N-1);
        console.log(N)
    }
}

solution(3)