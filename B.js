function B(n) {
  var A = [];

  for (let m = 0; m < n + 1; m++) {
    A[m] = 1 / (m + 1);
    for (let j = m; j > 0; j--) {
      A[j - 1] = j * (A[j - 1] - A[j]);
    }
  }

  return A[0];
}

module.exports = B;
