/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  if (arr.length <= 1) {
    return arr.length
  }
  let maxLength = 1
  let prev = arr[0]
  let shouldDown = arr[0] > arr[1]
  let curLen = 1
  let i = 1
  let tryIndex = -1

  while (i < arr.length) {
    const num = arr[i];
    if (prev > num && shouldDown || prev < num && !shouldDown) {
      curLen++
      shouldDown = !shouldDown

      maxLength = Math.max(maxLength, curLen)
      prev = num
      i++
    } else {
      curLen = 1
      // 将当前的比较值传给下次
      if (prev > num) {
        shouldDown = true
      } else {
        shouldDown = false
      }
      if (tryIndex === i) {
        prev = num
        i++
      } else {
        tryIndex = i
      }
    }
  }

  return maxLength
};

const test = [2,0,2,4,2,5,0,1,2,3]

console.log('结果', maxTurbulenceSize(test))