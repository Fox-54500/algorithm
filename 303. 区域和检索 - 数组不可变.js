/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this._nums = nums
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let res = 0
  for (let k = i; k <= j; k++) {
    res += this._nums[k]
  }
  return res
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */