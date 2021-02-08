var maxTurbulenceSize

// 解法一：按照题目意思走
maxTurbulenceSize = function (arr) {
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
      shouldDown = prev > num
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

// 解法二：滑动窗口
maxTurbulenceSize = function (arr) {
  let left = right = 0
  let maxLen = 1
  let arrLen = arr.length

  while (right < arrLen - 1) {
    if (left === right) {
      if (arr[right] === arr[right + 1]) {
        left++
      }
      right++
    } else {
      if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) {
        right++
      } else if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) {
        right++
      } else {
        left = right
      }
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
};




const test = [2, 0, 2, 4, 2, 5, 0, 1, 2, 3]

console.log('结果', maxTurbulenceSize(test))