// declare a function palindrome that takes in an input string str as an argument
function palindrome(str) {
  // declare a constant backward initialized as an empty array
  const backward = [];
  // declare a variable lowered lowercasing the string
  let lowered = str.toLowerCase()
  // declare a constant regex to remove all non-alphanumeric characters
  const regex = /[^A-Za-z0-9]*||\s*/g
  // declare a variable replaced to be lowered replacing all found regex with an empty string (this will be all alphanumerica characters of the original string in lowercase)
  let replaced = lowered.replace(regex, "")
  // loop through replaced
  for (let i = 0; i < replaced.length; i++) {
    // unshifting replaced characters into backward
    backward.unshift(replaced[i]);
  }
  // declare a variable joined to be the contents of the backward array joined with no delimiter
  let joined = backward.join("")
  // if replaced and joined are not equivalent
  if (replaced !== joined) {
      // return false
      return false;
    }
  // else return true
  return true;
}

palindrome("_eye");
