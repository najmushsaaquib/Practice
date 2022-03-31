let str = "abcd";
let res = ssq(str);
console.log(res.sort());

// let x = str.charAt(0);
// console.log(x);

function ssq(str) {
  if (str.length == 0) {
    let sarr = [];
    sarr.push("");
    return sarr;
  }

  let ch = str.charAt(0);
  let ros = str.substring(1);
  let arr = ssq(ros);

  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(arr[i]);
    finalArr.push(ch + arr[i]);
  }
  // for (let i = 0; i < arr.length; i++) {
  //   finalArr.push(ch + arr[i]);
  // }

  return finalArr;
}
