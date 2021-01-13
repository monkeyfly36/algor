/*
  leetcode 79.给定一个二维网格和一个单词，找出该单词是否存在于网格中。
  实例：board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ]

  给定 word = "ABCCED", 返回 true
  给定 word = "SEE", 返回 true
  给定 word = "ABCB", 返回 false
*/
var exist = function(board, word) {
  // 1.怎么找
  // 2.什么时候终止
  // 3.find(回溯)内部，怎么找下一步，（缓存存储中间的过程）

  if(board.length===0) return false
  if(word.length===0) return true
  const row = board.length
  const col = board[0].length
  // 怎么找
  for(let i=0;i<row;i++){
      for(let j=0;j<col;j++){
          const ret = find(i,j,0)
          if(ret) return true
      }
  }
  return false

  function find(i,j,cur) { //i,j-当前坐标; cur-字符第几个
      // 终止条件
      // a.越界要停止
      if(i>=row || i<0) return false
      if(j>=col || j<0) return false
      // b.字母不匹配
      const letter = board[i][j]
      if(letter!==word[cur]) return false
      // 找到最后一个了，而且相等
      if(cur==word.length-1) return true

      // c.回溯
      board[i][j] = null // 当前路径标记为null
      const ret = find(i+1,j,cur+1) ||
      find(i-1,j,cur+1) ||
      find(i,j+1,cur+1) ||
      find(i,j-1,cur+1)
      board[i][j] = letter // 回溯完以后再撤回, 不然会重复计算之前的
      return ret
  }
};