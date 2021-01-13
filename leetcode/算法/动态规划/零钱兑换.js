/*
  leetcode 322. 零钱兑换
  给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

  你可以认为每种硬币的数量是无限的。
*/

var coinChange = function(coins, amount) {
  // 贪心

  // DP
  if(amount === 0) return 0
  const dp = Array(amount+1).fill(Number.MAX_VALUE) // 存不同钱需要对于的最小次数
  dp[0] = 0
  for(let i = 0; i < dp.length; i++) { // i 是目标钱
    for(let j = 0; j < coins.length; j++) { // j 是遍历现有的硬币
      if(i - coins[j] >= 0) {
        dp[i]  = Math.min(dp[i], dp[i - coins[j]] + 1) // !!!!!核心: 递推公式 (画表)
      }
    }
  }
  return dp[dp.length - 1] === Number.MAX_VALUE ? -1 : dp[dp.length - 1]
}

