// y = csch(x) = 2/(e^x - e^-x))

const fx = require("./fx");

const x = parseFloat(process.argv[2], 10);
const eps = parseFloat(process.argv[3], 10);

const sum = fx(x, eps, true);

console.log("f(%d) = %d with E = %d", x, sum, eps);
