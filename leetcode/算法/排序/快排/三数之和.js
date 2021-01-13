/* 
  leetcode 15. 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
*/

var threeSum = function(nums) {
  // 排序 + 双指针(快排)
  // 小数据量排序可以用插入，大数据量排序用快排（指针，双指针）
  if(nums.length < 3) return []
  let list = []

  nums.sort((a, b) => a - b) // n*lgn
  for(let i = 0; i <= nums.length; i++) {
    if(nums[i] === nums[i-1]) continue 

    let left = i + 1
    let right = nums.length - 1
    while(left < right) {
      if(right === i) {
        right --
      } else if(nums[left] + nums[right] + nums[i] === 0) {
        list.push([nums[left], nums[right], nums[i]])
        while(nums[left] === nums[left+1]) {
          left ++
        }
        left ++
    
        while(nums[right] === nums[right-1]) {
          right -- // 重复跳过
        }
        right --
      } else if(nums[left] + nums[right] + nums[i] > 0){
        right --
      } else {
        left ++
      }
    }
  }
  return list
}