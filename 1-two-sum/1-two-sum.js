/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let intObj = {};
  for (var i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let x = target - curr;
    x = String(x);
    curr = String(curr);


    if (x in intObj) {
        


      return [intObj[x], i];
    } else {
      intObj[curr] = i;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
