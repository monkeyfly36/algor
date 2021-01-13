/*
  leetcode 72. 零钱兑换
  给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

  你可以对一个单词进行如下三种操作：

  插入一个字符
  删除一个字符
  替换一个字符
*/

var minDistance = function(word1, word2) {
  // 1.定义数组元素
  let dp = Array(word1.length + 1)
  for (let i = 0; i < dp.length; i++) {
      dp[i] = Array(word2.length + 1).fill(0)
  }

  // 3.设置初始值
  // 由于递归公式: min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) 用到i-1, !!!!!开头补空
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = dp[i-1][0] + 1
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = dp[0][j-1] + 1
  }

  // 2.找递推公式
  for(let i = 1; i <= word1.length; i++) {
    for(let j = 1; j <= word2.length; j++) {
      if(word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) + 1
      }
    }
  }
  return dp[word1.length][word2.length]
}

