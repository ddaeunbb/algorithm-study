function solution(word) {
  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const plus = [781, 156, 31, 6, 1];
  return word
    .split("")
    .reduce((acc, ch, idx) => acc + obj[ch] * plus[idx] + 1, 0);
}
console.log(solution("EIO"));

//  넘어갈떄 얼마나필요한지를생각해서

//
