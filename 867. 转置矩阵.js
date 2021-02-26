/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const oLen = matrix.length
  const iLen = matrix[0].length
  let result = new Array(iLen)
  for (let i = 0; i < iLen; i++) {
    result[i] = new Array(oLen)
    for (let j = 0; j < oLen; j++) {
      result[i][j] = matrix[j][i]
    }
  }

  return result
};

const test = [[1, 2, 3], [4, 5, 6]]
const result = transpose(test)

console.log(result)