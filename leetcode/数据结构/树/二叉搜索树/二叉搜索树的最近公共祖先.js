/*
  leetcode 235. 二叉搜索树的最近公共祖先
*/

// 比较二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
  // 递归
  // [val, pVal, qVal] = [root.val, p.val, q.val]
  // if(val > pVal && val > qVal) {
  //     return lowestCommonAncestor(root.left, p, q)
  // } else if(val < pVal && val < qVal) {
  //     return lowestCommonAncestor(root.right, p, q)
  // } else {
  //     return root
  // }

  // 迭代
  while(root) {
      if(root.val > p.val && root.val > q.val) {
          root = root.left
      } else if(root.val < p.val && root.val < q.val) {
          root = root.right
      } else {
          return root
      }
  }
}