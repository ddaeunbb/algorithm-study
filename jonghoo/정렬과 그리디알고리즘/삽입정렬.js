function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([11, 7, 5, 6, 10, 9]));

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort2([4, 3, 2, 1, 5, -5, 20, 17]));
