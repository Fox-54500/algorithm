/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = {}
  var handle = function (amt) {
    if (amt === 0) {
      return 0
    }
    if (amt < 0) {
      return -1
    }
    if (dp[amt]) {
      return dp[amt]
    }
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const sub = handle(amt - coin)
      if (sub === -1) {
        continue
      }
      min = Math.min(min, sub + 1)
    }
    if (min === Number.MAX_SAFE_INTEGER) {
      min = -1
    }
    dp[amt] = min
    return min
  }
  return handle(amount);
};
