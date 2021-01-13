/*
  leetcode 50. 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
*/
var myPow = function(x, n) {
  // 递归
  // if(n===0)return 1 // n=0直接返回1
  // if(n<0){   //n<0时 x的n次方等于1除以x的-n次方分
  //     return 1/myPow(x,-n)
  // }
  // if(n%2){   //n是奇数时 x的n次方 = x*x的n-1次方
  //     return x*myPow(x,n-1)
  // }
  // // n是偶数，使用分治，一分为二，等于x*x的n/2次方 
  // return myPow(x*x,n/2) 

  // 二分
  // 特殊: 当是负指数,先把x 搞成倒数, n变成正数
  if(n < 0) {  
    x = 1 / x
    n = -n
  }
  let fn = (i) => {
    if(i === 0) return 1
    if(i === 1) return x
    // 向下取整 相当于parseInt(i / 2) 或者 Math.floor(i / 2)
    let half = Math.floor(i / 2)                    
    let val = fn(half)   // 二分--保存值
    // 判断指数是否为奇数, 奇数要多乘一位x, 因为奇数的话上面取整会把这位忽略
    let m = i % 2 * x || 1               
    return val * val * m
  }
  return fn(n)
}
