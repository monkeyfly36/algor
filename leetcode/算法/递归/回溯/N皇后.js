/*
  leetcode 51. n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
*/

var solveNQueens = function(n) {
  // 四种情况
  // 1. 行不能一样
  // 2. 列不能一样
  // 3. 行-列不能一样
  // 4. 行+列不能一样

  let ret = []
  // 查找第0行
  find(0)
  return ret

  // 回溯
  function find(row, tmp = []) {
    // 终止条件
    if(row === n) {
      ret.push(tmp.map(c => {
        let arr = new Array(n).fill('.')
        arr[c] = 'Q'
        return arr.join('')
      }))
    }

    // 核心: 如何查找
    for(let col = 0; col < n; col++) {
      // console.log(row, col, tmp) 打印看细节
      // 是不是不能放
      let canSet = tmp.some((c, r) => {
        return c === col ||
               (r-c) === (row-col) ||
               (r+c) === (row+col)
      })
      if(canSet) {
       continue
      }
      // 如果能放，直接下一行
      find(row+1, [...tmp, col])
    }
  }
}