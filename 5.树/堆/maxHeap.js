// 参考最小堆实现

var arr = [53, 17, 78, 9, 45, 65, 87, 23]
var maxHeap = function () { // 打印用
// export const maxHeap = function () {
    var max_size, curr_size, heap 
    // 传入一个数组,然后调整为最大堆
    this.init = function(arr) {
        max_size = arr.length
        curr_size = max_size
        heap = new Array(arr.length)
        // 填充heap, 目前还不是一个堆
        for(var i =0;i<curr_size;i++){
            heap[i] = arr[i]
        }

        var curIndex = Math.floor((curr_size-2)/2)  // 这是堆的最后一个分支节点，总体自下而上
        while(curIndex >= 0){
            shif_down(curIndex, curr_size-1)        // 局部自上向下下滑调整
            curIndex -= 1                           // 调整下一个分支节点
        }
        return heap
    }
    // 将新元素插入最小堆中，思路：从下向上，与父节点关键码进行比较，对调--谁大谁上去，谁小谁下来(只与父节点比较)
    this.insert = function(item){
        // if (curr_size === max_size) { // 堆满了,不能再放元素
        //     return false
        // }
        heap[curr_size] = item
        shif_up(curr_size)
        curr_size ++
        return true
    }
    // 弹出堆顶，并重构最大堆
    this.remove_max = function() { // 思路：让最个一个元素替换堆顶，其余位置均保持最大堆结构，shif_down此时堆顶
        if(curr_size <= 0){
            return null
        }
        var min_value = heap[0]
        heap[0] = heap[curr_size-1]
        heap.pop() // ??删除最后一个元素
        curr_size--
        shif_down(0, curr_size-1)
        return min_value
    }
    this.size = function(){ return curr_size }
    this.print = function(){ console.log(heap) }
    this.get_min = function(){ return curr_size > 0 ?  heap[0] : null }

    // 局部下沉比较
    const shif_down = function(start, m){
        // 从start这个位置开始,向下下滑调整
        var parentIndex = start               // start就是当前这个局部的父节点
        var childIndex = parentIndex*2 + 1      // 一定有左孩子,先让childIndex等于左孩子的索引
    
        while(childIndex <= m){ // 先左右，后父子, m总个数
            // childIndex+1是左孩子的索引, 左孩子大于右孩子 ？？？有必要，有的，最初堆左右孩子是没有大小区分的
            if(childIndex < m && heap[childIndex] < heap[childIndex+1]){
                childIndex = childIndex+1 // childIndex永远指向值大的那个孩子
            }
            // 父节点的值大于等于两个孩子的最大值
            if(heap[parentIndex] >= heap[childIndex]){
                break  // 循环结束,不需要再调整了
            }else{
                // 父节点和最大子节点的值互换
                [heap[parentIndex], heap[childIndex]] = [heap[childIndex], heap[parentIndex]]
                // 继续向下
                parentIndex = childIndex // 当前最大节点变为父节点
                childIndex = 2*childIndex + 1 // 最大节点变为当前最大节点的左孩子
            }
        }
    }
    // insert 向上比较
    const shif_up = (start) => {
        var childIndex = start        // 当前节点是叶节点
        var parentIndex = Math.floor((childIndex-1)/2)   // 找到父节点
    
        while(childIndex > 0) {
            if(heap[parentIndex] > heap[childIndex]) { // 父节点更大,就不用调整了
                break
            } else { // 父节点小于子节点, 交换位置, childIndex和parentIndex更新
                [heap[parentIndex], heap[childIndex]] = [heap[childIndex], heap[parentIndex]]
                childIndex = parentIndex
                parentIndex = Math.floor((childIndex-1)/2)
            }
        }
    }
}

var maxHeap = new maxHeap()
maxHeap.init(arr)
maxHeap.print()
maxHeap.insert(25)
maxHeap.print()
console.log(maxHeap.remove_max())
maxHeap.print()