/*
  位运算最大的特点就是快(二进制性能最佳)
  举例：1.判断奇偶数 x & 1
        2.异或：自己异或都是0(可用来找不同的数); 和0异或都是自己
*/

/* 
  leetcode 136. 空间复杂度O(1)
  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
*/

var singleNumber = function(nums) {
  let tmp = 0
    for(let num of nums) {
        tmp ^= num
    }
    return tmp
}