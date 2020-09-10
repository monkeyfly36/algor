// PL--根节点到每一个节点的路径长度之和; WPL--外节点的值与该节点到根节点路径长度的乘积
// 应用： 编码--在通信领域，经过哈夫曼编码的的信息小于大量冗余数据，提高传输效率，是重要的数据压缩方法

// 思路： 通过最小堆，找出最小两个数弹出，将这两数之和组成一新元素插入最下堆，循环至最终堆顶为哈夫曼树的根节点

// 编码
var CodeNode = function(code, rate){
    this.code = code     // 字符
    this.rate = rate     // 概率
}
// 定义树节点
var TreeNode = function(data){
    this.data = data
    this.leftChild = null
    this.rightChild = null
    this.parent = null
}
// 准备数据, 初始化forest
var codeList = {
    "a": 0.12,
    "b": 0.4,
    "c": 0.15,
    "d": 0.08,
    "e": 0.25
}
var forest = []
for(var key in codeList){
    var item = new CodeNode(key, codeList[key])
    forest.push(new TreeNode(item))
}

function huffmanTree(){
    var root = null

    this.init_tree = function(arr){
        var min_heap = new MinHeap()
        min_heap.init(arr)
        for(var i = 0;i < arr.length - 1; i++){
            var first = min_heap.remove_min()
            var second = min_heap.remove_min()

            var new_item = new CodeNode("", first.data.rate + second.data.rate)
            var new_node = new TreeNode(new_item)
            min_heap.insert(new_node)

            new_node.leftChild = first
            new_node.rightChild = second
            first.parent = new_node
            second.parent = new_node

            root = new_node
        }
    }

    var get_code_from_tree = function(node, codeObj, val){
        // 赋值弹出
        if(!node.leftChild && !node.rightChild) return codeObj[node.data.code] = val
        // 递归--val值补0或1,不返回
        if (node.leftChild) get_code_from_tree(node.leftChild, codeObj, val + "0")
        if (node.rightChild) get_code_from_tree(node.rightChild, codeObj, val + "1")
    }
    this.get_code = function(){
        // 获得最终的变长编码
        var codeObj = {}
        get_code_from_tree(root, codeObj, "")
        return codeObj
    }
    this.print = function(){
        console.log(root)
    }
}

function MinHeap(size){
    var heap = new Array(size)
    var curr_size = 0
    var max_size = size


    var shif_down = function(start, m){
        // 从start这个位置开始,向下下滑调整
        var parent_index = start;                       // start就是当前这个局部的父节点
        var min_child_index = parent_index*2 + 1;       // 一定有左孩子,先让min_child_index等于左孩子的索引

        while(min_child_index <= m){
            // min_child_index+1 是左孩子的索引, 左孩子大于右孩子
            if(min_child_index < m && heap[min_child_index].data.rate > heap[min_child_index+1].data.rate){
                min_child_index = min_child_index+1;  // min_child_index永远指向值小的那个孩子
            }

            // 父节点的值小于等于两个孩子的最小值
            if(heap[parent_index].data.rate <= heap[min_child_index].data.rate){
                break;   // 循环结束,不需要再调整了
            }else{
                // 父节点和子节点的值互换
                var tmp = heap[parent_index];
                heap[parent_index] = heap[min_child_index];
                heap[min_child_index] = tmp;
                parent_index = min_child_index;
                min_child_index = 2*min_child_index + 1;
            }
        }

    };

    // 传入一个数组,然后调整为最小堆
    this.init = function(arr){
        max_size = arr.length;
        curr_size = max_size;
        heap = new Array(arr.length);
        // 填充heap, 目前还不是一个堆
        for(var i =0; i<curr_size;i++){
            heap[i] = arr[i];
        }

        var curr_pos = Math.floor((curr_size-2)/2)      // 这是堆的最后一个分支节点
        while(curr_pos >= 0){
            shif_down(curr_pos, curr_size-1);        // 局部自上向下下滑调整
            curr_pos -= 1;                           // 调整下一个分支节点
        }
    };

    var shif_up = function(start){
        var child_index = start;         // 当前节点是叶节点
        var parent_index = Math.floor((child_index-1)/2);   // 找到父节点


        while(child_index > 0){
            // 父节点更小,就不用调整了
            if(heap[parent_index].data.rate <= heap[child_index].data.rate){
                break;
            }else{
                // 父节点和子节点的值互换
                var tmp = heap[child_index];
                heap[child_index] = heap[parent_index];
                heap[parent_index] = tmp;
                child_index = parent_index;
                parent_index = Math.floor((parent_index-1)/2);
            }
        }
    };

    this.insert = function(item){
        // 插入一个新的元素
        // 堆满了,不能再放元素
        if(curr_size == max_size){
            return false;
        }

        heap[curr_size] = item;
        shif_up(curr_size);
        curr_size++;
        return true;
    };

    //删除最小值
    this.remove_min = function(){
        if(curr_size <= 0){
            return null;
        }
        var min_value = heap[0];
        heap[0] = heap[curr_size-1];
        curr_size--;
        shif_down(0, curr_size-1);
        return min_value;
    };

    this.size = function(){
        return curr_size;
    };

    this.print = function(){
        console.log(heap);
    };
};

var huffman_tree = new huffmanTree();
huffman_tree.init_tree(forest);
console.log(huffman_tree.get_code());