// Complete the caesarCipher function below.
function caesarCipher(s, k) {
  let rS = s.split("");

  let oLAlphabet = "abcdefghijklmnopqrstuvwxyz",
    oUAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    eLAlphabets = "abcdefghijklmnopqrstuvwxyz",
    eUAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < k; i++) {
    eLAlphabets = eLAlphabets.substring(1) + eLAlphabets[0];
    eUAlphabets = eUAlphabets.substring(1) + eUAlphabets[0];
  }

  console.log(rS);
  for (let i = 0; i < s.length; i++) {
    if (oLAlphabet.includes(s[i]))
      rS[i] = eLAlphabets[oLAlphabet.indexOf(s[i])];
    else if (oUAlphabet.includes(s[i]))
      rS[i] = eUAlphabets[oUAlphabet.indexOf(s[i])];
  }
  console.log(rS);
  return rS.join("");
}

console.log(caesarCipher("middle-Outz", 2)); // Expected output - okffng-Qwvb
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)); // Expected output - Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
