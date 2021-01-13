/* 
  找出[1,2,3,4,5]中，相加等于8的两个数下标
*/
// 时间复杂度O(n2), 空间O(1)
// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       console.log(i, j)
//       if(nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }
// 时间复杂度O(n) 空间O(n)-- 思路: 空间换时间
var twoSum = function(nums, target) {
  let tem = {}
  for(let i = 0; i < nums.length; i++) {
    let val = nums[i]
    if(val in tem) {
      return [tem[val], i]
    }
    tem[target - val] = i
  }
}
console.log(twoSum([1,2,3,4,5], 8))

// 扩展：三数之和，找出[1,2,3,4,5]中，相加等于9的两个数
