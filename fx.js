const factorial = require("./factorial");
const B = require("./B");

function fx(x, eps, log = false) {
  let sum = 0;
  let term = 0;
  let iteration = 0;

  if (Math.abs(x) >= Math.PI) {
    throw new Error("|x| must be in (0, Pi)");
  }

  if (eps <= 0 || eps >= 1) {
    throw new Error("eps must be in (0, 1)");
  }

  if (eps < 0.000000000001) {
    throw new Error("exceeded accuracy limit");
  }

  do {
    const n = iteration;
    const n2 = 2 * n;
    const p = n2 - 1;
    const a = 2 ** p - 1;
    const b = B(n2);
    const c = x ** p;
    const d = factorial(n2);

    term = (2 * a * b * c) / d;
    sum = sum + term;
    iteration += 1;

    if (log) {
      console.log("iter: ", iteration, "; ", term, " - term;", sum, " - sum;");
    }
  } while (Math.abs(term) > eps);

  return sum;
}

module.exports = fx;
