// 4. 졸업 선물
// 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
// 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.
// 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.

function solution(n, money, arr){
  let answer = 0;
  let sumArr = arr.map(el => el[0]+ el[1]);
  let sortSum = [...sumArr].sort((a,b)=> a-b);
  
  for(let i = 0; i < n; i++){
    let price = money - sortSum[i];
    
    if( price < 0){
      let findIdx = sumArr.indexOf(sortSum[i]);
      let half = (arr[findIdx][0]) / 2;
      if(price + half < 0) continue;
      money-= (sortSum[i] + half);
      answer++;
    } else{
      money-= sortSum[i];
      answer++;
    }
  }
  return answer
}

// 강사님 답안
function solution2(m, product){
  let answer = 0;
  let n = product.length;
  product.sort((a,b)=> (a[0]+a[1]) - (b[0] + b[1]));

  for(let i = 0; i < n; i++){
    let money = m - (product[i][0]/2 + product[i][1]);
    let cnt = 1;
    for(let j = 0; j < n; j++){
      if(j !== i && (product[j][0] +  product[j][1] >  money)) break;
      if(j !== i && (product[j][0] + product[j][1]) <= money){
        money -= (product[j][0] + product[j][1]);
        cnt++;
      }
    }
    answer= Math.max(answer, cnt);
  }
  return answer;
}


console.log(solution(5, 28, [[6,6], [2,2], [4,3], [4,5], [10,3]]));