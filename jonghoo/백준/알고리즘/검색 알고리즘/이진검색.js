function binarySearch(arr, element, start, end) {
  if (start > end) return -1;
  let mid = parseInt((start + end) / 2);

  if (arr[mid] === element) return mid;
  else if (arr[mid] > element)
    return binarySearch(arr, element, start, mid - 1);
  else return binarySearch(arr, element, mid + 1, end);
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 0, 9));
console.log(binarySearch([3, 4, 5, 5, 5, 7, 9], 5, 0, 6));

function binarySearch1(arr, element, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === element) return mid;
    else if (arr[mid] > element) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
