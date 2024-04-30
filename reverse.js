let input = process.argv[2]; ////Using var cause an error because we changing of the input

if (input) console.log(reverse(input));
function reverse(original) {
  return original.split("").reverse().join(""); //There is no reverseList function and the original was a typo
}
