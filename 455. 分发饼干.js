/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  let i = 0, j = 0, k = 0;
  while (j < s.length && i < g.length) {
    if (g[i] <= s[j]) {
      k++;
      i++;
      j++;
    } else {
      i++
    }
  }
  return (k)
};

findContentChildren([5, 5, 6], [4, 5, 6])


