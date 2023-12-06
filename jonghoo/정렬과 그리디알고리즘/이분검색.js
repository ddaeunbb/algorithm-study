function solution(arr,M){
    arr.sort((a,b)=>a-b)
    let answer=arr.indexOf(M)
    return answer+1

}

function solution1(target,M){
    let answer;
    target.sort((a,b)=>a-b);
    let lt =0, rt=target.length-1;
    while(lt<=rt){
        let mid =parseInt((lt+rt)/2);
        if(target[mid]==M){
            answer=mid+1;
            break;
        }
        else if(target[mid]>M){
            rt=mid-1
        }
        else lt=mid+1


    }
    return answer
}

console.log(solution([23, 87 ,65, 12 ,57, 32, 99, 81
],32));
console.log(solution1([23, 87 ,65, 12 ,57, 32, 99, 81
],32));