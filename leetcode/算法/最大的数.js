/*
  leetcode 179. 给定一组非负整数 nums，重新排列它们每个数字的顺序（每个数字不可拆分）使之组成一个最大的整数。
  注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
*/

var largestNumber = function(nums) {
  nums = nums.sort((a,b) => {
    let s1 = `${a}${b}`
    let s2 = `${b}${a}`
    return s2 - s1
  })
  return nums[0] ? nums.join('') : '0'
}