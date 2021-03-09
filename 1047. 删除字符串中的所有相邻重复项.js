/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let i = 0
  let prev = -1
  S = S.split('')
  while (i < S.length) {
    if (prev > -1 && S[prev] === S[i]) {
      S[prev] = ''
      S[i] = ''
      while (S[prev] === '')  {
        prev--
      }
    } else {
      prev = i
    }
    i++
  }
  return S.join('')
};