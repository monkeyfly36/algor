/*
  简化路径 
  输入："/a/./b/../../c/"  输出："/c"
  输入："/a/../../b/../c//.//"  输出："/c"
*/
var simplifyPath = function(path) {
  let stack = []
  path = path.split('/')
  for(let i = 0; i < path.length; i++) {
    let val = path[i]
    if(val === '..') {
      stack.pop()
    } else if(val && val !== "."){
      stack.push(val)
    }
  }
  return '/' + stack.join('/')
}
console.log(simplifyPath("/a/../../b/../c//.//"))
