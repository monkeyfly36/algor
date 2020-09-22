// 理想情况下，快排最快，算法复杂度O(nlog2n)
// 注：如果数组已经是有序的，使用快排O(n2),不是最快的，是最慢的;
// 当序列长度在5到25之间时，直接插入排序的速度比快速排序快至少10%, 插入排序见3

// 操作：1.分区
// 随机找一个数(默认第0个数)为基准，默认左边都比它小，右边都比它大

// 取arr[start]为基准值,将start到end这个区域进行分区
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

// function quick_sort_ex(arr, start, end){
//     if(start < end){
//         var pivotpos = partition(arr, start, end)
//         // 不管基准值了，基准值现在的位置就是变成有序数组的位置
//         quick_sort_ex(arr, start, pivotpos-1)
//         quick_sort_ex(arr, pivotpos+1, end)
//     }
// }

// 改进快排， 与插入比较
function quick_sort_ex(arr, start, end){
    if(start < end){
        if(end-start <=25){
            insert_sort(arr, start, end);
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


var arr = [2, 7, 8, 1, 4, 6, 9, 3]
quick_sort(arr)
console.log(arr)

//！！！ 问： 快排是不是最快的？
// 答： 就平均而言，快排是最快的;
//     但如果这个数组是有序的，快排时间复杂度是O(n2)，反而是最慢的;
//     如果数组的规模小于25时，用直接插入排序会更快。
