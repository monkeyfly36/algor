/* 
  leetcode 98. 验证二叉搜索树
*/

var isValidBST = function(root) {
  // 递归 - 整个右树都要大于节点
  // function dfs(node,low,high){
  //   if(node==null){
  //     return true
  //   }
  //   if(node.val<=low || node.val>=high){
  //     return false
  //   }
  //   return dfs(node.left,low,node.val) && dfs(node.right,node.val,high)
  // }
  // return dfs(root, -Infinity, Infinity)

  // 中序 - 迭代
  let stack = [] // 暂存, 为右孩子和自己服务
  let tem = -Infinity
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    if(cur.val <= tem) {
      return false
    }
    tem = cur.val
    cur = cur.right
  }
  return true
}