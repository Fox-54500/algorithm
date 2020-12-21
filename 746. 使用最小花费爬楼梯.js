/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // dp代表上到某个台阶所需要的花费
  let dp = new Array(cost.length + 1)
  // 第一或者第二个台阶都是不需要花费的
  dp[0] = dp[1] = 0

  // 前两个台阶不需要花费
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[cost.length]
};