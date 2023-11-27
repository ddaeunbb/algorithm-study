function solution(number, k) {
    let arr=number.split('').map(Number)
    let first=arr.slice(0,k+1)
    let max=Math.max(...first)
    for(let i=0;i<first.length;i++){
        if(arr[i]!==max){
            console.log('틀림')
        }
        else if(arr[i]==max) break;
    }
    return [arr,max]
}

console.log(solution("1924",2));
console.log(solution("1231234",3));
console.log(solution("4177252841",4));