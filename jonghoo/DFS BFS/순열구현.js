function permutate(arr, k) {
  const result = [];

  //DFS
  const dfs = (i, arr) => {
    //base condition
    if (i === k) {
      return result.push([...arr.slice(0, k)]);
    }
    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      dfs(i + 1, arr);
      //swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  dfs(0, arr);
  return result;
}

console.log(permutate(["a", "b", "c"], 2));
