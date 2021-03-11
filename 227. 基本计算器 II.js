/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let num = ''
  let queue = []
  let preSign = '+'
  let calc = ['+', '-', '*', '/']

  for (let i = 0; i <= s.length; i++) {
    const char = s[i];

    if (calc.includes(char) || i === s.length) {
      num = Number(num)
      switch (preSign) {
        case '+':
          queue.push(num)
          break
        case '-':
          queue.push(-num)
          break
        case '*':
          queue.push(queue.pop() * num)
          break
        case '/':
          queue.push(parseInt(queue.pop() / num))
      }
      preSign = char
      num = ''
    } else {
      if (char !== ' ') {
        num += char
      }
    }
  }


  return queue.reduce((a,b)=>a+b, 0)
};
const test = '1+1+2*3+3*3'
const result = calculate(test)
console.log(result)