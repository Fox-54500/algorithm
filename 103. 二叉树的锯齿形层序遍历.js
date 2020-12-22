/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }
  let queue = [root]
  let res = []

  while (queue.length) {
    res.push([])
    let newQueue = []
    queue.forEach(q => {
      if (!q) {
        return
      }
      if ((res.length - 1) % 2 === 0) {
        res[res.length - 1].push(q.val)
      } else {
        res[res.length - 1].unshift(q.val)
      }
      q.left && newQueue.push(q.left)
      q.right && newQueue.push(q.right)
    })
    queue = newQueue
  }
  return res
};


// 递归解法
var zigzagLevelOrder = function (root) {
  const res = []
  var handle = function (node, depth) {
    if (!node) {
      return
    }
    setArray(res, depth, node.val)
    handle(node.left, depth + 1)
    handle(node.right, depth + 1)
  }

  handle(root, 0)

  return res
};

function setArray(arr, index, value) {
  if (arr[index]) {
    if (index % 2 === 0) {
      arr[index].push(value)
    } else {
      arr[index].unshift(value)
    }
  } else {
    arr[index] = [value]
  }
}