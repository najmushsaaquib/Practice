let arr = [1, 2, 6, 3, 4, 5];

console.log(selectionSort(arr));

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = index; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    swap(index, i, arr);
  }
  return arr;
}
