// 散列--音译是哈希， java中叫hashTable, c++叫map。
// 特点：查找O(1), key--int, value--链表
// 用数组可以实现栈，队列，堆，并查集，散列表，散列表是一种改进的字典
// 数组中的索引都是整数，而你使用的关键码可能是一个字符串--hash函数
// 数组中的索引超出了数组索引范围--除留余数法 hash(key) = key%p （!找一个小于等于m的质数p作为除数）

// 链表可伸缩，数组不可自由伸缩
// 处理冲突--真正的冲突不是hash函数造成的，而是除留余数法导致的->最有效的办法是采用开散列方法,存链表

const LinkList = require("./linkList")
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
            items[i] = new LinkList.LinkList()
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

        // 如果过于拥挤了就扩容
        if(is_too_crowd()) {
            this.expand()
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
    // 扩容--加入 key_count/divisor > 5(可以自己定)，就认为太拥挤。简单说就是init时size设小了
    var is_too_crowd = function() {
        if(Math.floor(key_count / divisor) >= 5){
            return true
        }
        return false
    }
    this.expand = () => {
        // 临时数组保存原来的数据
        var tmp_arr = new Array(items.length)
        for(var i = 0; i < items.length; i++) {
            tmp_arr[i] = items[i]
        }

        // 初始化数组
        items = new Array(items.length * 2)
        for(var i = 0; i < items.length; i++) {
            items[i] = new LinkList.LinkList()
        }
        
        // 设置除数
        var temp = items.length
        while(temp > 2) {
            if(is_Prime(temp)){
                divisor = temp
                break
            }
            temp--
        }

        // 把临时数组里的数据导入到items中
        for(var i =0; i < tmp_arr.length; i++) {
            var link = tmp_arr[i]
            // 获得链表的头
            var curr_node = link.get_head()
            while(curr_node) {
                this.set(curr_node.key, curr_node.value)
                key_count--
                curr_node = curr_node.next
            }
        }
    }
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

// 性能优化--1.使用AVL搜索树(有点麻烦) 2.扩容(推荐)

// 虽然扩容可以解决拥挤问题，但是如果数据量非常的大，在扩容过程中，耗费的时间就会很长，这样就会影响到下一次的set或者get操作，
// 请你设计一种方案，可以平滑的进行扩容，即便数据量很大，也不至于阻塞太久，影响后面的操作
