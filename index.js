function hasTargetSum(array, target) {
  // Write your algorithm here
  //for constant time 0(1)
  const seen = new set();
  //now we interate over each number in an array 0(n)
  for(let number of array){
    const complement = target-number;
    //this will calculate the compliment for the current number 0(1)
    //if the outcome of the complement has beeen captured before then we have found a pair that adds up to the target 0(1)
    if (seen.has(complement)) {
      return true;
    }
    seen.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
