// Complete the minimumNumber function below.
function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let uCaseCount = 0,
    lCaseCount = 0,
    dCount = 0,
    sCount = 0;
  let charNeeded = 0;

  /* 
    Below algorithm increments the counters depending upon ASCII values or directly          comparing  charAt(i) to given all symbols.
    */
  //
  // for (let i = 0; i < n; i++){
  //     if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
  //         lCaseCount++;
  //     else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
  //         uCaseCount++;
  //     else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
  //         dCount++;
  //     else if (password.charAt(i) == '!' || password.charAt(i) == "@" ||
  //         password.charAt(i) == "#" || password.charAt(i) == "$" ||
  //         password.charAt(i) == "%" || password.charAt(i) == "^" ||
  //         password.charAt(i) == "*" || password.charAt(i) == "&" ||
  //         password.charAt(i) == "(" || password.charAt(i) == ")" ||
  //         password.charAt(i) == "-" || password.charAt(i) == "+") {
  //         sCount++;
  //     }
  // }

  /*
    Below algorithm uses four strings to check if charAt(i) is present in any of the         four strings and then increment counter.
    */

  let numbers = "0123456789",
    lower_case = "abcdefghijklmnopqrstuvwxyz",
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special_characters = "!@#$%^&*()-+";

  for (let i = 0; i < n; i++) {
    if (lower_case.includes(password.charAt(i))) lCaseCount++;
    else if (upper_case.includes(password.charAt(i))) uCaseCount++;
    else if (numbers.includes(password.charAt(i))) dCount++;
    else if (special_characters.includes(password.charAt(i))) sCount++;
  }

  // Check the counters and increment charNeeded
  if (lCaseCount === 0) charNeeded++;
  if (uCaseCount === 0) charNeeded++;
  if (dCount === 0) charNeeded++;
  if (sCount === 0) charNeeded++;

  let len = n + charNeeded;

  if (len < 6) {
    return 6 - len + charNeeded;
  } else {
    return charNeeded;
  }
}

console.log(minimumNumber(3, "Ab1")); // Expected output - 3
console.log(minimumNumber(11, "#HackerRank")); // Expected output - 1
