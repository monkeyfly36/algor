/*
  leetcode 236. 二叉树的最近公共祖先
*/

// 比较二叉搜索树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
  // 递归
  // 终止条件
  if(root === null || root === p || root === q) {
    return root
  }

  let left = lowestCommonAncestor(root.left, p, q) 
  let right = lowestCommonAncestor(root.right, p, q) 
  return left === null ? right : ( right === null ? left : root )
}