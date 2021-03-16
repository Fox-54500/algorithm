/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let i = 0,
    j = -1,
    times = 0

  let direct = 0
  let x = n
  let y = n
  let count = x * y
  const res = new Array(n).fill(0).map(() => {
    return new Array(n)
  })

  while (times < count) {
    let move = 0
    // →
    if (direct % 4 === 0) {
      j++
      times++
      res[i][j] = times
      while (move < x - 1 && times < count) {
        times++
        move++
        j++
        res[i][j] = times
      }
    }
    // ↓
    else if (direct % 4 === 1) {
      while (move < y - 1 && times < count) {
        times++
        move++
        i++
        res[i][j] = times
      }
      y--
    }
    // ←
    else if (direct % 4 === 2) {
      while (move < x - 1 && times < count) {
        times++
        move++
        j--
        res[i][j] = times
      }
    }
    // ↑
    else if (direct % 4 === 3) {
      while (move < y - 1 && times < count) {
        times++
        move++
        i--
        res[i][j] = times
      }
      x -= 2
      y--
    }
    direct++
  }

  return res
};

const test = 3
const result = spiralOrder(test)
console.log(result)
