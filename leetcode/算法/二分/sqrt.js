/*
  leetcode 69. 实现 int sqrt(int x) 函数
*/

var mySqrt = function(x) {
  // 二分 -- x平方根的边界 [1, x / 2 + 1]
  if (x < 2) return x

  let l = 1, r = (x >> 1) + 1, mid = 1

  while (l <= r) {
      mid = (l + r) >> 1

      if (mid ** 2 < x) {
          l = mid + 1
      }else if (mid ** 2 > x) {
          r = mid - 1
      } else {
          return mid
      }
  }

  return r
}
console.log(mySqrt(1000000))