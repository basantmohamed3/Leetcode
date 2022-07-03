var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let med;

  while (l <= r) {
    med = Math.floor((l + r) / 2);

    if (nums[med] === target) {
      return med;
    } else if (nums[med] > target) {
      r = med-1;
    } else  {
      l = med+1;
    }
  }
    return l

};

