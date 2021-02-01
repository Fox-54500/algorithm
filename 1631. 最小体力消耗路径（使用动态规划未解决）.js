/**
 * @param {number[][]} heights
 * @return {number}
 */
/*var minimumEffortPath = function (heights) {
  if (!heights.length || !heights[0].length) {
    return
  }
  let maxCol = heights[0].length - 1
  let maxRow = heights.length - 1
  let MINIMUN = Number.MAX_SAFE_INTEGER
  let handle = function ([x, y], prev, road, min) {
    let _road = road.slice()
    if (x < 0 || x > maxRow || y < 0 || y > maxCol || _road.includes(x + '-' + y)) {
      return Number.MAX_SAFE_INTEGER
    }
    min = Math.max(Math.abs(heights[x][y] - prev), min)
    if (min > MINIMUN) {
      return Number.MAX_SAFE_INTEGER
    }
    if (x === maxRow && y === maxCol) {
      MINIMUN = Math.min(MINIMUN, min)
      return min
    } else {
      _road.push(x + '-' + y)
    }
    return Math.min(
      handle([x, y + 1], heights[x][y], _road, min),
      handle([x + 1, y], heights[x][y], _road, min),
      handle([x, y - 1], heights[x][y], _road, min),
      handle([x - 1, y], heights[x][y], _road, min),
      MINIMUN
    )
  }

  return handle([0, 0], heights[0][0], [], 0)
};*/


/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  if (!heights.length || !heights[0].length) {
    return
  }
  let maxCol = heights[0].length - 1
  let maxRow = heights.length - 1

  let handle = function ([x, y], prev, road, min) {
    let _road = road.slice()
    if (x < 0 || x > maxRow || y < 0 || y > maxCol || _road.includes(x + '-' + y)) {
      return Number.MAX_SAFE_INTEGER
    }
    min = Math.max(Math.abs(heights[x][y] - prev), min)
    if (min > MINIMUN) {
      return Number.MAX_SAFE_INTEGER
    }
    if (x === maxRow && y === maxCol) {
      MINIMUN = Math.min(MINIMUN, min)
      return min
    } else {
      _road.push(x + '-' + y)
    }
    return Math.min(
      handle([x, y + 1], heights[x][y], _road, min),
      handle([x + 1, y], heights[x][y], _road, min),
      handle([x, y - 1], heights[x][y], _road, min),
      handle([x - 1, y], heights[x][y], _road, min),
      MINIMUN
    )
  }

  return handle([0, 0], heights[0][0], [], 0)
};

const result = minimumEffortPath(
  [
    [8, 3, 2, 5, 2, 10, 7, 1, 8, 9],
    [1, 4, 9, 1, 10, 2, 4, 10, 3, 5],
    [4, 10, 10, 3, 6, 1, 3, 9, 8, 8],
    [4, 4, 6, 10, 10, 10, 2, 10, 8, 8],
    [9, 10, 2, 4, 1, 2, 2, 6, 5, 7],
    [2, 9, 2, 6, 1, 4, 7, 6, 10, 9],
    [8, 8, 2, 10, 8, 2, 3, 9, 5, 3],
    [2, 10, 9, 3, 5, 1, 7, 4, 5, 6],
    [2, 3, 9, 2, 5, 10, 2, 7, 1, 8],
    [9, 10, 4, 10, 7, 4, 9, 3, 1, 6]
  ]
)

console.log(result)