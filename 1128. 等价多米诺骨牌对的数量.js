/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let res = 0
  for(let i = 0; i < dominoes.length - 1; i++) {
    const pre = dominoes[i]
    for(let j = i + 1; j < dominoes.length;j++) {
      let cur = dominoes[j]
      if ((pre[0] === cur[0] && pre[1] === cur[1]) || (pre[0] === cur[1] && pre[1] === cur[0])) {
        res++
      }
    }
  }
  return res
};