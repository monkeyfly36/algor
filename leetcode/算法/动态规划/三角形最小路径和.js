/*
  leetcode 120. 三角形最小路径和
  给定一个三角形 triangle ，找出自顶向下的最小路径和。
  每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

  DP 思路: tmp[n] -> tmp[0] 从小到大推上去
  tmp[j] = min[tmp[j], tmp[j+1]] + triangle[i][j]
*/

var minimumTotal = function(triangle) {
  let len = triangle.length - 1
  let tmp = triangle[len] // 初始值
  for(let i = len - 1; i > 0; i--) {
    for(let j = 0; j < triangle[i].length; j++) {
      tmp[j] = triangle[i][j] + Math.min[tmp[j], tmp[j+1]]
    }
  }
  return tmp[0]
}