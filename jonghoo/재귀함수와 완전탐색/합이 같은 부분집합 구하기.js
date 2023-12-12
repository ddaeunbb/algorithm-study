function solution(arr){
    let check = Array.from({ length: arr.length}, () => 0);
    let answer="NO"
    function DFS(v){
        if(v===arr.length){
            let temp1=[]
            let temp2=[]
            for(let i=0;i<arr.length;i++){
                if(check[i]==1) temp1.push(arr[i])
                else temp2.push(arr[i])
            }
            let n1 =temp1.reduce((a,b)=>a+b,0)
            let n2 =temp2.reduce((a,b)=>a+b,0)
        
            if(n1==n2){
                answer="YES"
            }
          
           

        }
        else{
            check[v]=1
            DFS(v+1)
            check[v]=0
            DFS(v+1)

    }
    }
    DFS(0)
    return answer
   
}

console.log(solution([1,3,5,6,7,10]));