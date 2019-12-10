let f = [1, 1];
let i = 2;

function factorial(n) {
  if (typeof f[n] != "undefined") return f[n];
  let result = f[i - 1];
  for (; i <= n; i++) {
    f[i] = result = result * i;
  }
  return result;
}
const cache = 100;
//due to memoization following line will cache first 100 elements
factorial(cache);

module.exports = factorial;
