/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].charCodeAt();
    map[letter - 97]++
  }
  for (let i = 0; i < s.length; i++) {
    const letter = s[i].charCodeAt();
    if (map[letter - 97] === 1) {
      return i
    }
  }
  return -1
};