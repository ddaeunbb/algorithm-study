/* 뮤직비디오(결정알고리즘)
지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다.
DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지
되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 즉, 1번 노래와 5번
노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야
한다. 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는
DVD를 가급적 줄이려고 한다. 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기
로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 그리고 M개의 DVD는
모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
▣ 입력설명
첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 다음 줄에는 조영필이 라이브에서
부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 부른 곡의 길이는 10,000분을
넘지 않는다고 가정하자.
▣ 출력설명
첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.
 */

const solution = (m, songs) => {
  // dvd의 최소용량과 최대용량
  let answer = 0;
  let start = Math.max(...songs);
  let end = songs.reduce((a, b) => a + b, 0);

  while (start <= end) {
    let count = 1;
    let sumOfSong = 0;

    let mid = parseInt((start + end) / 2);

    console.log("이번에 알아본 dvd 용량: ", mid);

    for (let i = 0; i < songs.length; i++) {
      if (sumOfSong + songs[i] > mid) {
        // dvd 카운트 한장 올려주고 새 dvd로 리셋
        console.log(count, "장째 dvd 용량 초과");
        count++;
        sumOfSong = songs[i];
      } else {
        // 아직 노래 들어갈 수 있으면 넣기
        sumOfSong += songs[i];
        console.log(count, "장째 dvd에 추가 현재 사용량", sumOfSong);
      }
    }

    if (count <= m) {
      console.log("용량이 ", mid, "일 경우 최소", count, "장에 담을 수 있음");
      answer = mid;
      end = mid - 1;
      console.log("따라서 최대 용량을", end, "이하로 줄임");
    } else {
      console.log("용량이 ", mid, "일 경우 최소", count, "장에 담을 수 있음");

      start = mid + 1;
      console.log("따라서 최소 용량을", start, "이상으로 늘임");
    }
  }

  return answer;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr)); // 17
// 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.
