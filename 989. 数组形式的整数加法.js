/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  const KArr = K.toString().split('')
  let bash = 0
  let i = 0
  let result = []
  while(A.length > i || KArr.length > i) {
    const a = A[A.length - i - 1] || 0
    const b = KArr[KArr.length - i - 1] || 0
    let r = a + Number(b) + bash
    bash = 0
    if (r >= 10) {
      r -= 10
      bash+= 1
    }
    result.push(r)
    i++
  }
  if (bash > 0) {
    result.push(bash)
  }
  return result.reverse()
};

addToArrayForm([0], 3)