/*
  leetcode 11
*/

// 双指针
var maxArea = function(height) {
  // area = n * min(hr, hl)
  // 双指针 -- 两边的指针，移动矮的那个
  if(!height || height <= 1) { return 0 }

  let left = 0 
  let right = height.length - 1
  let maxA = 0 // 存储最大的值

  while(left < right) {
    const area = Math.abs(right - left) * Math.min(height[left], height[right])
    if(area > maxA) {
      maxA = area
    }
    if(height[left] < height[right]) {
      left ++
    } else {
      right --
    }
  }
  return maxA
}