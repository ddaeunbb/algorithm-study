//함수는 배열과 값을 인자로받고
//배열내부에 값이 포함되어있는지 확인한다. 만약 있다면 index 를 추출하고 없다면 -1 을 리턴해준다.
//indexOf

function linearSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));

//배열의길이가 증가한다면 시간복잡도는?
//가장 최고 O(1)  최악 O(n)
//데이터가 분류되어있을떄 좋은검색이있나?
