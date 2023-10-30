// 처음 풀었을 때,
function solution(phone_book) {
  for(let i = 0; i < phone_book.length; i++){
      for(let j = 0; j < phone_book.length; j++){
          if( i !== j){
              if(phone_book[j].includes(phone_book[i])) return false;
          }
      }
  }
  return true
}


// 확인했던 답안
function solution(phone_book) {
  phone_book.sort(); 
  
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
      return false;
    }
  }
  return true;
}
