// 使用场景：1.在一个有序的序列中，查找某个具体数值的位置;2.找一个比目标值大的索引
// 与快排区别：二分每次都只进入其中某一个子序列;快排每次分区后，两个子序列都要处理

// 1.查找某个具体数值的位置
function binary_search(arr, target, start, end){
  if(start > end){
      return -1;    //表示找不到
  }

  var middle = Math.floor((start+end)/2)
  if(arr[middle]==target) {
      return middle;
  } else if(arr[middle]> target) {
      // 去左侧查找
      return binary_search(arr, target, start, middle-1)
  } else {
      // 去右侧查找
      return binary_search(arr, target, middle+1, end)
  }
}
// var arr = [1, 3, 4, 6, 7, 9, 10];
// console.log(binary_search(arr, 5, 0, arr.length-1))
// console.log(binary_search(arr, 9, 0, arr.length-1))

// 2.找一个比目标值大的位置
function binary_search_max(arr, target, start, end){
    if (arr[start] > target) { // 边界条件第一个值就大于目标值，否则会有-1索引
        return start
    }

    if (start > end){
        return -1;    //表示找不到
    }
  
    var middle = Math.floor((start+end)/2)
    if (arr[middle] <= target) {
        // 去右侧查找
        if(arr[middle+1] > target) {
            return middle+1
        }
        return binary_search_max(arr, target, middle+1, end)
    } else {
        // 去左侧查找
        return binary_search_max(arr, target, start, middle-1)
    }
  }
  var arr = [1, 3, 4, 6, 7, 9, 10];
  console.log(binary_search_max(arr, 5, 0, arr.length-1))
  console.log(binary_search_max(arr, 0, 0, arr.length-1))