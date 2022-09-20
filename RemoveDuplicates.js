var removeDuplicates = function (nums) {
  let indexCounter = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[indexCounter] = nums[i];
      indexCounter++;
    }
  }
  return indexCounter;
};
