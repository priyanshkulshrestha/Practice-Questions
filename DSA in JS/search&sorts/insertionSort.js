function insertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
    i++;
  }
  return arr;
}

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

arr = [2,7,9,3,6,1,8,5,4];

console.log(insertionSort(arr));