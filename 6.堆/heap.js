var arr = [53, 17, 78, 9, 45, 65, 87, 23]

var shif_down = function(start, m){
    // 从start这个位置开始,向下下滑调整
    var parentIndex = start                      // start就是当前这个局部的父节点
    var minIndex = parentIndex*2 + 1      // 一定有左孩子,先让minIndex等于左孩子的索引

    while(minIndex <= m){
        // minIndex+1 是左孩子的索引, 左孩子大于右孩子 ？？？有必要
        if(minIndex < m && heap[minIndex] > heap[minIndex+1]){
            minIndex = minIndex+1 // minIndex永远指向值小的那个孩子
        }

        // 父节点的值小于等于两个孩子的最小值
        if(heap[parentIndex] <= heap[minIndex]){
            break  // 循环结束,不需要再调整了
        }else{
            // 父节点和子节点的值互换
            [heap[parentIndex], heap[minIndex]] = [heap[minIndex], heap[parentIndex]]
            // 继续向下
            parentIndex = minIndex // 当前最小节点变为父节点
            minIndex = 2*minIndex + 1 // 最小节点变为当前最小节点的左孩子
        }
        console.log(heap)
    }
};

// 传入一个数组,然后调整为最小堆
const init = function(arr){
    max_size = arr.length;
    curr_size = max_size;
    heap = new Array(arr.length);
    // 填充heap, 目前还不是一个堆
    for(var i =0;i<curr_size;i++){
        heap[i] = arr[i];
    }

    var curr_pos = Math.floor((curr_size-2)/2)     // 这是堆的最后一个分支节点
    while(curr_pos >= 0){
        shif_down(curr_pos, curr_size-1)           // 局部自上向下下滑调整
        curr_pos -= 1                              // 调整下一个分支节点
    }
    
};

console.log(init(arr))
