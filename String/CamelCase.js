// Complete the camelcase function below.
function camelcase(s) {
  // s = s.replace(/[^a-aA-Z]/g, '');
  console.log(s);
  if (s.length === 0) return 0;
  let wordCount = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) wordCount++;
  }
  return wordCount;
}

console.log(camelcase("saveChangesInTheEditor")); // Expected output - 5
console.log(camelcase("hackerRank")); // Expected output - 2
