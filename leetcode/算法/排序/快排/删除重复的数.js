/*
  leetcode 26. 给定一个排序数组，删除排序数组中的重复项，返回移除后数组的新长度。
 */
var removeDuplicates = function(nums) {
  // var count = 0
  // for(let i = 1; i<nums.length; i++){
  //     // 每一个数值与前面一个比对，相同计数，不同在nums中记一个值
  //     if(nums[i] != nums[i-1]) {
  //         nums[i-count] = nums[i]
  //     }else{
  //         count++
  //     }
  // }
  // return n-count

  // 双指针
  let len = nums.length
  let slow = 0
  for(let fast = 0; fast < len; fast++) {
      if(nums[fast] !== nums[slow]) {
          slow ++
          nums[slow] = nums[fast]
      }
  }
  return slow + 1

}