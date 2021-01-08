/*
  斐波那契: 斐波那契数列的前两项是 1 1, 此后的每一项都是该项前面两项之和,
  即f(n) = f(n-1) + f(n-2)

  思路：递归, 缓存递推, 动态规划
  数学公式：矩阵, 位运算, 通项公式 ???
*/
var fib = function(n) {
  // 递归--性能较差, 有重复的计算
  // 复杂度???
  // if (n === 0 || n === 1) {
  //   return n
  // }
  // return fib(n-1) + fib(n-2)

  // 递推，缓存优化--数学概念a[n]=a[n-1]+a[n-2]，区别递归是计算机概念复用一段代码
  // 时间复杂度O(n)，空间O(n)
  var cache = []
  // for(let i = 0; i <= n; i++) {
  //   if (i === 0 || i === 1) {
  //     cache[i] = i
  //   } else {
  //     cache[i] = cache[i-1] + cache[i-2]
  //   }
  // }
  // return cache[n] 

  // 动态规划 空间O(1)
  let p, q = 0
  let r = 1
  for(let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      r = i
    } else {
      p = q
      q = r
      r = p + q
    }
  }
  return r
}
console.log(fib(2))




