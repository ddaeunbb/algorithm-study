// 처음 풀었던 풀이
function solution(genres, plays) {
  // 각 장르마다 배열만들어서 Push ([수, 고유번호])
  //다시 map 돌면서 솔팅하고
  // 결과 배열에 고유번호 push 
  const genH = new Map();
  const len = plays.length;
  const answer = [];
  const genRank = [];
  const genRankList = [];
  
  // 장르별 순위 정하기
  for(let i = 0; i < len; i++){
      const gen = genres[i]
      const play = plays[i];
      genRank.push([gen, play]);
  }
  
  genRank.sort((a,b) => b[1] - a[1])
  genRank.forEach(el => {
      if(genRankList.indexOf(el[0]) < 0) genRankList.push(el[0])
  })
  
  // 장르별 노래수와 고유번호 정리하기
  for(let i = 0; i < len; i++){
      const genEl = genres[i];
      const playEl = plays[i];
      
      if(!genH.has(genEl)) genH.set(genEl, [[playEl, i]]);
      else {
          const arr = genH.get(genEl);
          arr.push([playEl, i]);
      }
  }
  
  // 정답구하기
  for(let el of genRankList){
      const copy = [...genH.get(el)];
      copy.sort((a,b)=> b[0] - a[0]);
      answer.push(copy[0][1]);
      answer.push(copy[1][1]);
  }
  return answer;
}

// 정답
function solution(genres, plays){
  let answer = [];
  let playCntByGenre = {};
  
  for(let i = 0; i < genres.length; i++){
    const gen = genres[i];
    const play = plays[i];
    playCntByGenre[gen] = playCntByGenre[gen] ? playCntByGenre[gen] + play : play;
  }

  let keyValueArr = Object.entries(playCntByGenre);
  keyValueArr.sort((a,b)=> b[1] - a[1]);

  let allInfoObj = genres.map((g,i)=> ({
    genre: g,
    index: i,
    playCnt: plays[i],
  }))

  keyValueArr.forEach((k,i)=> {
    let current = [];
    for(let j = 0; j < allInfoObj.length; j++){
      if(k[0] === allInfoObj[j].genre) current.push(allInfoObj[j]);
    }
    current.sort((a,b)=> b.playCnt - a.playCnt);
    current.forEach((el,idx)=>{
      if( idx < 2){
        answer.push(el.index);
      }
    })
  })
  console.log(answer)
  return answer
}


solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);