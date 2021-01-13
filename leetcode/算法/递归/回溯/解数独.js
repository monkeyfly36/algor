/*
  leetcode 37. 编写一个程序，通过填充空格来解决数独问题。

  一个数独的解法需遵循如下规则：

  数字 1-9 在每一行只能出现一次。
  数字 1-9 在每一列只能出现一次。
  数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
  空白格用 '.' 表示。
*/

var solveSudoku = function(board) {
  for(let i = 0; i < 9; i++) {
    for(let j =0; j < 9; j++) {
      if(board[i][j] !== '.') continue
      // 放一个数字试试, 数字1～9
      for(let k = 1; k <= 9; k++) {
        if(isValid(i, j, k.toString())){
          // 能放
          board[i][j] = k.toString()
          if(solveSudoku(board)) return true
          // ??回溯, 不能放, 
          board[i][j] = '.'
        }
      }
      return false
    }
  }
  return true
  // 判断能不能放
  function isValid(row, col, k) {
    for(let i = 0; i < 9; i++) {
      // 行, 列判断
      if(board[row][i] === k || board[i][col] === k) {
        return false
      }
    }
    // 3*3方格
    const x = Math.floor(row/3) * 3
    const y = Math.floor(col/3) * 3
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(board[x+i][y+j] === k) {
          return false
        }
      }
    }
    return true
  }
}


