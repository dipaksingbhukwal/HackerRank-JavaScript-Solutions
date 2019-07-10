// Complete the marsExploration function below.
function marsExploration(s) {
  if (!s) return 0;
  let missingCount = 0;
  for (let i = 0; i < s.length; i += 3) {
    if (s[i] !== "S") missingCount++;
    if (s[i + 1] !== "O") missingCount++;
    if (s[i + 2] !== "S") missingCount++;
  }
  return missingCount;
}

console.log(marsExploration("SOSSPSSQSSOR")); // Expected output - 3
console.log(marsExploration("SOSSOT")); // Expected output - 1
console.log(marsExploration("SOSSOSSOS")); // Expected output - 0
