let input = process.argv[2]; ////Using var cause an error because we changing of the input

const reverse = function(original) {
  //Using expression function instead of declaration function
  return original.split("").reverse().join(""); //There is no reverseList function and the original was a typo
};

if (input) console.log(reverse(input)); //Expression function must always be at the top of the scope
