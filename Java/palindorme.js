let arr = [1, 2, 3];
let index = 0;
generatePermutations(arr, index)


function generatePermutations(arr, index) {
  if (arr.length == index) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = index; i < arr.length; i++) {
    swap(arr, i, index);

    generatePermutations(arr, index + 1);

    swap(arr, i, index);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


function runProgram(input=''){
  
    
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}