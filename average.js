function average(list) {
  let sum = 0; //Using var cause an error because we changing the value of sum

  for (let num of list) {
    //Using var cause an error because we changing the value of num

    sum += num; //The ++ is not the correct operator to use here, it should be +=
  }

  return sum / list.length;
} //Missing closing bracket for the function call average
console.log(average([3, 5, 7]));
