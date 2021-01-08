/*
  字符串'{([]()))})'--(),{},[]等可抵消，计算可以完全闭合抵消
*/
var isValid = function(s) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  let stack = []
  for(let i = 0; i < s.length; i++) {
    let val = s[i]
    if(val in obj) {
      stack.push(val)
    } else {
      if(val !== obj[stack.pop()]) {
        return false
      }
    }
  }
  return !stack.length
}
console.log(isValid('{[]}'))