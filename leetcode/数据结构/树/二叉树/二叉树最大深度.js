/*
  leetcode 104. 二叉树的最大深度
*/
var maxDepth = function(root) {
  // 递归
  // if(!root) {
  //     return 0
  // } else {
  //     const left = maxDepth(root.left)
  //     const right = maxDepth(root.right)
  //     return Math.max(left, right) + 1
  // }

  // 迭代 -- ？？？BFS广度优先
  var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    let maxDeep = 0
    let queue = [root]
    while (queue.length) {
        let n = queue.length
        // 一层一层遍历
        for (let i = 0; i < n; i++) {
            const curNode = queue.shift()
            if (curNode.left) queue.push(curNode.left)
            if (curNode.right) queue.push(curNode.right)
        }
        maxDeep++
    }
    return maxDeep
  }
}