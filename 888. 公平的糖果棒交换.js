/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let ASum = A.reduce((sum, a) => sum + a, 0)
  let BSum = B.reduce((sum, a) => sum + a, 0)

  let outer = ASum > BSum ? B : A
  let inner = ASum < BSum ? B : A
  const offset = Math.abs(ASum - BSum)

  for (let i = 0; i < outer.length; i++) {
    const pre = outer[i];
    for (let j = 0; j < inner.length; j++) {
      const cur = inner[j];
      if ((cur - pre) * 2 === offset) {
        return outer === A ? [pre, cur] : [cur, pre]
      }
    }
  }
  return []
};