let arr = [7,2,4,2,1,9,2];
let x = 2;

console.log(allIndex(arr, x, 0, 0));

function allIndex(arr, x, index, fsf) {
  if (index == arr.length) {
    let final = [];
    return final;
  }

  if (arr[index] == x) {
    final = allIndex(arr, x, index + 1, fsf + 1);
    final[fsf] = index;
    return final;
  } else {
    final = allIndex(arr, x, index + 1, fsf);
    return final;
  }
}
