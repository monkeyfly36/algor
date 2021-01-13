/*
  leetcode 912. 给你一个整数数组 nums，请你将该数组升序排列。
 */
var sortArray = function(nums) {
  // 快排
  for(let i = 0; i<nums.length; i++) {
      for(let j=i; j<nums.length; j++) {
          if(nums[i] > nums[j]) {
              [nums[i], nums[j]] = [nums[j], nums[i]]
          }
      }   
  }
  return nums
}