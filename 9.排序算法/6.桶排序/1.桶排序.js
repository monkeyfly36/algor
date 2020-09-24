// 排序序列划分成n个等长的子区间，这些子区间也称为箱，将各个元素根据自己所属的区间放入相应的桶中

// const quick_sort = require("./quick_sort.js");

function bucket_sort(arr){
    var sort_arr = []
    var buckets = new Array(4);
    for(var i=0;i<buckets.length;i++){
        buckets[i] = [];
    }
    // 放入对应的桶里
    for(var i=0;i<arr.length;i++){
        var index = Math.floor(arr[i]/3);
        buckets[index].push(arr[i])
    }
    // 对每一个桶进行排序
    for(var i=0;i<buckets.length;i++){
        quick_sort(buckets[i]);
    }

    // 搜集桶里的数据
    for(var i=0;i<buckets.length;i++){
        for(var j=0;j<buckets[i].length;j++){
            sort_arr.push(buckets[i][j])
        }
    }
    return sort_arr
}

function partition(arr, start, end){
  var pivotpos = start;
  var pivot = arr[start];

  for(var i = start + 1; i <= end; i++){
      if(arr[i] < pivot){
          pivotpos++
          if(pivotpos != i){
              // 将小于基准的值交换到左侧
              var temp = arr[pivotpos]
              arr[pivotpos] = arr[i]
              arr[i] = temp
          }
      }
  }
  arr[start] = arr[pivotpos]
  arr[pivotpos] = pivot

  return pivotpos
}
function quick_sort_ex(arr, start, end){
  if(start < end){
      if(end-start <=25){
        partition(arr, start, end);
      }else {
          var pivotpos = partition(arr, start, end);
          quick_sort_ex(arr, start, pivotpos - 1);
          quick_sort_ex(arr, pivotpos + 1, end);
      }
  }
}
function quick_sort(arr){
  quick_sort_ex(arr, 0, arr.length-1)
}

var arr = [7, 2, 8, 1, 4, 6, 9, 3];
sort_arr = bucket_sort(arr);
console.log(sort_arr);