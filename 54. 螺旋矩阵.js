/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let i = 0,
        j = -1,
        times = 0

    let direct = 0
    let x = matrix[0].length
    let y = matrix.length
    let count = x * y
    const res = []

    while (times < count) {
        let move = 0
        // →
        if (direct % 4 === 0) {
            j++
            times++
            res.push(matrix[i][j])
            while (move < x - 1 && times < count) {
                times++
                move++
                j++
                res.push(matrix[i][j])
            }
        }
        // ↓
        else if (direct % 4 === 1) {
            while (move < y - 1 && times < count) {
                times++
                move++
                i++
                res.push(matrix[i][j])
            }
            y--
        }
        // ←
        else if (direct % 4 === 2) {
            while (move < x - 1 && times < count) {
                times++
                move++
                j--
                res.push(matrix[i][j])
            }
        }
        // ↑
        else if (direct % 4 === 3) {
            while (move < y - 1 && times < count) {
                times++
                move++
                i--
                console.log(i, j)
                res.push(matrix[i][j])
            }
            x -= 2
            y--
        }
        direct++
    }

    return res
};

const test = [
    [3,1],
    [2,2],
    [1,3]
]
const result = spiralOrder(test)
console.log(result)
