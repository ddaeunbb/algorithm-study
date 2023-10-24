function permutate(arr, k) {
  const result = [];

  //DFS
  const dfs = (i, arr) => {
    //base condition
    if (i === k) {
      console.log(arr.slice(0, k));
      return result.push([...arr.slice(0, k)]);
    }
    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      dfs(i + 1, arr);
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  dfs(0, arr);
  return result;
}

console.log(permutate(["a", "b", "c"], 1));

function countSubArrSumofX(arr, x) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > x) {
        break;
      } else if (sum == x) {
        count++;
        break;
      }
    }
  }
  return count;
}

console.log(countSubArrSumofX([1, 3, 6, 5, 2, 7, 9], 9));
