function solution(arr,M){
    arr.sort((a,b)=>a-b)
    let answer=arr.indexOf(M)
    return answer+1

}

console.log(solution([23, 87 ,65, 12 ,57, 32, 99, 81
],32));