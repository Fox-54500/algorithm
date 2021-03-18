/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const originHead = head
  let preNode = null, lastNode = null
  let time = 1
  let pre = null, cur = null
  let newNodeTail = null, newNodeHead = null

  while (head) {
    if (time === left - 1) {
      preNode = head
    }
    if (time === right + 1) {
      lastNode = head
    }

    if (time === left) {
      while (time <= right && time >= left) {
        if (time===left) {
          newNodeTail = head
        }
        const _next = head.next
        head.next = pre
        pre = head
        if (time === right) {
          newNodeHead = head
        }
        head = _next
        time++
      }
      continue
    }

    time++
    head = head.next
  }
  newNodeTail.next = lastNode
  if (preNode === null) {
    return newNodeHead
  } else {
    preNode.next = newNodeHead
    return originHead
  }
};

const test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 5,
        next: null
      }
    }
  }
}
const result = reverseBetween(test, 2, 3)
console.log(result.next)