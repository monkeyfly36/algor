/*
  拼接字符串
*/

// 原始
var leftpad = function(str, length, ch) {
  let len = length - str.length + 1
  return Array(len).join(ch)+str
}
// 测试
console.time('leftpad')
for(let i = 0; i< 10000; i++) {
  leftpad('hello', 10000, '0')
}
console.timeEnd('leftpad')
// console.log(leftpad('hello', 10, '0'))

// ???二分法
var leftpad2 = function(str, length, ch) {
  let len = length - str.length + 1
  let total = ''
  while(len){
    if(len%2 === 1) {
      total += ch
    } 
    if(len === 1) {
      return total + str
    }
    ch += ch
    len = parseInt(len/2)
  }
}
// 测试
console.time('leftpad2')
for(let i = 0; i< 10000; i++) {
  leftpad2('hello', 10000, '0')
}
console.timeEnd('leftpad2')
// console.log(leftpad2('hello', 10, '0'))

// 改造二分法 - 位运算
var leftpad3 = function(str, length, ch) {
  let len = length - str.length + 1
  let total = ''
  while(len){
    if(len%2 === 1) {
      total += ch
    } 
    if(len === 1) {
      return total + str
    }
    ch += ch
    // len = parseInt(len/2)
    len = len >> 1
  }
}
// 测试
console.time('leftpad3')
for(let i = 0; i< 10000; i++) {
  leftpad3('hello', 10000, '0')
}
console.timeEnd('leftpad3')
// console.log(leftpad2('hello', 10, '0'))