/*
  前序: 自 -> left -> right  leetcode 144. 二叉树的前序遍历
  中序: left -> 自 -> right            94. 二叉树的中序遍历
  后序: left -> right -> 自           145. 二叉树的后序遍历
*/
// 前序 - 递归
var preorderTraversal = function(root, arr = []) {
  if(root) {
    arr.push(root.val)
    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)
  }
  return arr
}
// 前序 - 迭代
var preorderTraversal = function(root) {
  let res = []
  let stack = [] // 暂存, 为右孩子服务
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      res.push(cur.val)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return res
}

/*****************************************************/
// 中序 - 递归
var inorderTraversal = function(root, arr = []) {
  if(root) {
    inorderTraversal(root.left, arr)
    arr.push(root.val)
    inorderTraversal(root.right, arr)
  }
  return arr
}
// 迭代
var inorderTraversal = function(root) {
  let res = []
  let stack = [] // 暂存, 为右孩子和自己服务
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
}
/*****************************************************/
// 后序 - 递归
var postorderTraversal = function(root, arr = []) {
  if(root) {
    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    arr.push(root.val)
  }
  return arr
}
// 迭代
var postorderTraversal = function(root) { // 1.打标记;2.巧解
  // var Tag = function(node, state){
  //     this.node = node
  //     this.state = state   // 0表示左边已经遍历结束, 1表示右边已经遍历结束
  // }
  // let stack = []
  // let res = []
  // let cur = root // 当前节点
  // while(cur || stack.length){
  //     while(cur){
  //         var tag = new Tag(cur, 0)
  //         stack.push(tag)
  //         cur = cur.left
  //     }

  //     let tem = stack.pop() // 临时节点
  //     if(tem.node.right && tem.state === 0) {
  //         tem.state = 1
  //         stack.push(tem)
  //         cur = tem.node.right
  //     } else { // 当没有右节点或者state=1时, 放进res 思想同前序
  //         res.push(tem.node.val)
  //     }
  // }
  // return res

  /* **************************************** */

  let stack = [] // 压栈顺序右左中
  let res = []   // 使用unshift存储数据
  if(!root) return res
  let cur = root
  stack.push(cur)
  while(stack.length > 0){
      cur = stack.pop()
      res.unshift(cur.val)

      if(cur.left){
          stack.push(cur.left)
      }
      if(cur.right){
          stack.push(cur.right)
      }
  }
  return res
};