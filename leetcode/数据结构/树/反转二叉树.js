var invertTree = function(root) {
  // 终止条件
  if(root === null) {
    return root
  }
  // 递归
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}