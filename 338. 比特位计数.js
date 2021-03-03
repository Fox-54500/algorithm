/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let numArr = [0]
  let cur = 0
  const res = [0]

  for (let i = 0; i < num; i++) {
    [numArr, cur] = func1(numArr)
    res.push(cur)
  }

  return res
};

function func1(arr) {
  let _ss = 0
  arr[arr.length - 1]++
  let one = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    const item = arr[i];
    arr[i] = _ss + item
    _ss = 0
    if (arr[i] > 1) {
      arr[i] -= 2
      _ss = 1
    }
    if (arr[i] === 1) {
      one++
    }
  }
  if (_ss === 1) {
    arr.unshift(1)
    one++
  }
  return [arr, one]
}

console.log(countBits(5))