function solve(n) {
  if (n == 1) {
    return n;
  }

  return n * solve(n - 1);
}

console.log(solve(4));

