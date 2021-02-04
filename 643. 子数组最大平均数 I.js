/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxAvg = Number.MIN_SAFE_INTEGER
  for (let i = 0; i <= nums.length - k; i++) {
    // 可优化
    let cur = nums.slice(i, i + k).reduce((sum, a) => sum + a, 0)
    console.log(nums.slice(i, i + k))
    maxAvg = Math.max(maxAvg, cur)
  }
  console.log(maxAvg)
  return maxAvg / k
};

findMaxAverage([5, 1], 1)