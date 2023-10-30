function lowerBound(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= element) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > element) end = mid;
    else start = mid + 1;
  }
  return end;
}

console.log(lowerBound([3, 4, 5, 5, 5, 7, 9], 5));
console.log(upperBound([3, 4, 5, 5, 5, 7, 9], 5));

//특정 범위에 원소찾기

function countByRange(arr, leftvalue, rightvalue) {
  let leftIndex = lowerBound(arr, leftvalue);
  let rightIndex = upperBound(arr, rightvalue);
  return rightIndex - leftIndex;
}

let test = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
console.log(countByRange(test, -1, 3));
