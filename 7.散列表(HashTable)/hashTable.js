// 散列--音译是哈希， java中叫hashTable, c++叫map
// 用数组可以实现栈，队列，堆，并查集，散列表，散列表是一种改进的字典
// 数组中的索引都是整数，而你使用的关键码可能是一个字符串--hash函数
// 数组中的索引超出了数组索引范围--除留余数法 hash(key) = key%p （找一个小于等于m的质数p作为除数）

// 链表可伸缩，数组不可自由伸缩
// 处理冲突--真正的冲突不是hash函数造成的，而是除留余数法导致的->最有效的办法是采用开散列方法,存链表

// export const hashTable = function() {
const hashTable = function() {
    var items = []         // 存储数据
    var divisor = 7        // 除数
    var key_count = 0      // key的数量

    // 判断一个数是否为质数
    var is_Prime = function(number){
        for(var i = 2; i < number; i++){
            if(number % i == 0){
                return false
            }
            return true
        }
    }
    // 灵魂， 这个函数传入关键码key，经过散列得到在数组中的索引位置
    var get_index = function(key){
        var tmp_key = key.toString()
        var hash_value = Math.abs(murmurhash3_32_gc(tmp_key, 0))
        return hash_value % divisor
    }

    this.init = function(size){
        items = new Array(size)
        // 初始化数组
        for(var i=0;i< size;i++){
            items[i] = new LinkList()
        }
        // 设置除数
        var temp = size;
        while(temp > 2){
            if(is_Prime(temp)){
                divisor = temp
                break
            }
            temp--
        }
    }
    this.get = function(key){
        var index = get_index(key)
        var node = items[index].search(key)
        if(node){
            return node.value
        }
        return null
    }
    this.set = function(key, value){
        var index = get_index(key)
        var node = items[index].search(key)
        if(node) {
            node.value = value
        }else {
            items[index].append(key, value)
            key_count++
        }
    }
    this.del_key = function(key){
        var index = get_index(key)
        var res = items[index].remove_key(key)
        if(res){
            key_count--
        }
        return res
    }
    this.haskey = function(key) {
        var index = get_index(key)
        var node = items[index].search(key)
        if(node){
            return true
        }
        return false
    }
}

function LinkList(){
    // 定义节点
    var Node = function(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    };

    var length = 0;        // 长度
    var head = null;       // 头节点
    var tail = null;       // 尾节点

    // 添加一个新元素
    this.append = function(key, value){
        if(this.search(key) != null){
            return false;
        }
        // 创建新节点
        var node = new Node(key, value);
        // 如果是空链表
        if(head==null){
            head = node;
            tail = head;
        }else{
            tail.next = node;       // 尾节点指向新创建的节点
            tail = node;            // tail指向链表的最后一个节点
        }
        length += 1;                // 长度加1
        return true;
    };

    // 返回链表大小
    this.length = function(){
        return length;
    };

    // 获得指定位置的节点
    var get_node = function(index){
        if(index < 0 || index >= length){
            return null;
        }
        var curr_node = head;
        var node_index = index;
        while(node_index-- > 0){
            curr_node = curr_node.next;
        }
        return curr_node;
    };

    // 删除指定位置的节点
    this.remove = function(index){
        // 参数不合法
        if(index < 0 || index >= length){
            return null;
        }else{
            var del_node = null;
            // 删除的是头节点
            if(index == 0){
                // head指向下一个节点
                del_node = head;
                head = head.next;
                // 如果head == null,说明之前链表只有一个节点
                if(!head){
                    tail = null;
                }
            }else{
                // 找到索引为index-1的节点
                var pre_node = get_node(index-1);
                del_node = pre_node.next;
                pre_node.next = pre_node.next.next;
                // 如果删除的是尾节点
                if(del_node.next==null){
                    tail = pre_node;
                }
            }

            length -= 1;
            del_node.next = null;
            return del_node;
        }
    };

    // 返回指定位置节点的值
    this.get = function(index){
        var node = get_node(index);
        if(node){
            return node;
        }
        return null;
    };

    this.search = function(key){
        var index = -1;
        var curr_node = head;
        while(curr_node){
            index += 1;
            if(curr_node.key == key){
                return curr_node;
            }else{
                curr_node = curr_node.next;
            }
        }
        return null;
    };

    this.remove_key = function(key){
        var index = this.indexOf(key);
        if(index >=0){
            this.remove(index);
            return true;
        }
        return false;
    };

    this.indexOf = function(key){
        var index = -1;
        var curr_node = head;
        while(curr_node){
            index += 1
            if(curr_node.key == key){
                return index;
            }else{
                curr_node = curr_node.next;
            }
        }
        return -1;
    };

    // isEmpty
    this.isEmpty = function(){
        return length == 0;
    };

    // 返回链表大小
    this.length = function(){
        return length;
    };
    // 返回链表的头节点
    this.get_head = function(){
        return head;
    };
}
function murmurhash3_32_gc(key, seed) {
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;

    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;

    while (i < bytes) {
        k1 =
            ((key.charCodeAt(i) & 0xff)) |
            ((key.charCodeAt(++i) & 0xff) << 8) |
            ((key.charCodeAt(++i) & 0xff) << 16) |
            ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;

        k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
        h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
    }

    k1 = 0;

    switch (remainder) {
        case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1: k1 ^= (key.charCodeAt(i) & 0xff);

            k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= k1;
    }

    h1 ^= key.length;

    h1 ^= h1 >>> 16;
    h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
    h1 ^= h1 >>> 16;

    return h1 >>> 0;
}
var hash = new hashTable()
hash.init(10)
hash.set(11,'2')
hash.set(4,'12')
console.log(hash.haskey(4))

// 性能优化--1.使用搜索树 2.扩容

