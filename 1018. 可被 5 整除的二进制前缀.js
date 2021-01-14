/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let cur = 0
  const res = []
  for(let i = 0; i<A.length;i++) {
    cur = (cur * 2 + A[i]) % 5
    res.push(cur === 0)
  }
  return res
};
prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1])
