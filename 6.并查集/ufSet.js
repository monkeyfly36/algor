// 支持下面3种操作：
// union(root1, root2) 把集合root2合并入集合root1中，要求是root1和root2互不相交
// find(x) 搜索x所在的集合，返回该集合的名字
// 初始化init， 将s个元素初始化为s个只有一个元素的子集合
// 注：1.每个元素都是一个单独的集合，与其他集合互不相交
//    2.刚初始化的并查集，每个元素是一个单独的集合，它的索引就是这个集合的集合名
//    3.每个元素的值，就是其父节点所在的索引，由于刚刚初始化，每个元素的值都是-1，-1这个索引在数组中是不存在的，这恰好表明每个元素都没有父节点

// 核心：只当索引，相交，父元素(第一个)值为集合个数的负数，子元素值为父元素的索引
// 以朋友圈为例
// export const UFSet = function() {
export const UFSet = function() {
    var parent = []

    this.init = function(size){
        parent = new Array(size)
        for(var i = 0; i < size; i++) {
            parent[i] = -1
        }
    }
    this.find = function(item) {
        while(parent[item] >=0) {
            item = parent[item]
        }
        return item
    }
    this.union = function(root1, root2) { // root其实代表索引值，通过find得到
        parent[root1] += parent[root2]
        parent[root2] = root1
    }

    //建立朋友关系
    this.build_relation = function(i, j) {
        var root1 = this.find(i)
        var root2 = this.find(j)
        // 不在同一个集合中,就合并到一起
        if(root1 != root2) {
            this.union(root1, root2)
        }
    }
    // 是不是朋友
    this.is_friend = function(i, j) {
        var root1 = this.find(i)
        var root2 = this.find(j)
        return root1 == root2
    }
    // 朋友圈个数
    this.get_friend_group_count = function() {
        var count = 0
        for(var i= 0; i < parent.length; i++) {
            if(parent[i]<0){
                count++
            }
        }
        return count
    }
}

var friends = [
    [0, 7],
    [1, 6],
    [4, 8],
    [8, 2],
    [9, 0],
    [3, 5],
    [1, 2]
]

var ufset = new UFSet()
ufset.init(10)

for(var i =0;i<friends.length; i++){
    var item = friends[i]
    ufset.build_relation(item[0], item[1])
}

console.log("朋友圈个数为 " + ufset.get_friend_group_count())
console.log(ufset.is_friend(2, 6))
console.log(ufset.is_friend(6, 8))
console.log(ufset.is_friend(4, 8))
console.log(ufset.is_friend(9, 7))
console.log(ufset.is_friend(2, 4))
console.log(ufset.is_friend(2, 7))
console.log(ufset.find(2))
console.log(ufset.find(8))
