/*
  leetcode 198. 打劫
  你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

  给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
*/
var rob = function(nums) {
  let dp = []
  let max = 0
  dp = [0] // 补0
  for(let i = 0; i<nums.length; i++){
      dp[i + 1] = Math.max(nums[i] + max, dp[i]) // 递推公式
      if(dp[i] > max) {
          max = dp[i]
      }
  }
  return dp[nums.length]
}

/*
  leetcode 198. 打劫II
  同一, 加所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的

  思路: 第一个和最后一个不可能在一组里，所以可以拆成两个数组
*/
// 同上
function getRob(nums) {
  let dp = []
  let max = 0
  dp = [0] // 补0
  for(let i = 0; i<nums.length; i++){
      dp[i + 1] = Math.max(nums[i] + max, dp[i]) // 递推公式
      if(dp[i] > max) {
          max = dp[i]
      }
  }
  return dp[nums.length]
}
var rob = function(nums) {
  if(nums.length === 1) return nums[0]
  var num1 = JSON.parse(JSON.stringify(nums)) 
  num1.splice(nums.length-1, 1)
  var num2 = JSON.parse(JSON.stringify(nums))
  num2.splice(0, 1)
  return Math.max(getRob(num1), getRob(num2))
}


/*
  leetcode 337. 打劫III
  二叉树结构

  思路: 动态规划
*/
var rob = function(root) {
  const f = new Map() // 用
  const g = new Map() // 不用
  // 辅助函数
  const dfs = (node) => {
      if (node === null) {
          return
      }
      dfs(node.left)
      dfs(node.right)
      f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0))
      g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0))
  }
  
  dfs(root)
  return Math.max(f.get(root) || 0, g.get(root) || 0)
}