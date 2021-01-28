/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (nums.length < 3) {
    return nums.length === 1 ? 0: -1
  }

  let prev = 0
  let past = nums.reduce((sum, a) => sum + a, 0)
  for (let i = 0; i < nums.length; i++) {
    prev += nums[i - 1] || 0
    past -= nums[i]
    if (prev === past) {
      return i
    }
  }
  return -1
};
