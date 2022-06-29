var search = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return false;
  }
  let low = 0;
  let high = nums.length - 1;
  let med 

  while (low <= high) {
      med  = Math.floor((low + high) / 2);
    if (target === nums[med]) {
      return med;
    }
    if (target > nums[med]) {
      low = med + 1;
    }
    if (target < nums[med]) {
      high = med - 1;
    }

  }
        console.log(-1)
    return -1;
};


