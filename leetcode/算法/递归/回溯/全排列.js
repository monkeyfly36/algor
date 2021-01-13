/*
  leetcode 46(39,78). 全排列--给定一个 没有重复 数字的序列，返回其所有可能的全排列。
  思想: 递归 + 回溯
*/

function backtrack(list, temp, nums) {
  // 递归终止条件
  if(temp.length === nums.length) {
    return list.push(temp)
  }
  for(let i = 0; i < nums.length; i++) {
    if(temp.includes(nums[i])) continue
    temp.push(nums[i])
    backtrack(list, temp, nums)
    temp.pop()
  }
}
var permute = function(nums) {
  let list = []
  backtrack(list, [], nums)
  return list
}