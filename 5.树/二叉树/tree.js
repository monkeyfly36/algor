// 二叉树

// 定义节点
function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

export const BinaryTree = function() {
    this.root = null // 1.根结点 2.方便打印查看树结构

    // 创建树, 并插入节点
    this.insert = function (data) {
        var newNode = new Node(data)

        if (this.root == null) {
            this.root = newNode
            return
        }

        insertNode(this.root, newNode)
    }
    // 中序--先打印左, 再中, 再右--升序
    this.in_order = function (node) {
        if (node === null) {
            return
        }
        this.in_order(node.left)
        console.log(node.data)
        this.in_order(node.right)
    }
    // 前序--先打印中, 再左, 再右
    this.pre_order = function (node) {
        if (node === null) {
            return
        }
        console.log(node.data)
        this.pre_order(node.left)
        this.pre_order(node.right)
    }
    // 后序--先打印左, 再右, 再中
    this.back_order = function (node) {
        if (node === null) {
            return
        }
        this.back_order(node.left)
        this.back_order(node.right)
        console.log(node.data)
    }
    // 获取树的节点数
    this.count = function () {
        return getCount(this.root)
    }
    // 查看树的高度
    this.height = function () {
        return getHeight(this.root)
    }
    // 查找节点的高度
    this.nodeHeight= function (data) {
        return getNodeHeight(this.root, data)
    }
    // 查找--最小值, 最大值, 是否存在--小于节点, 找左边;大于节点, 找右边;
    this.min = function (node) {
        if (node === null) return null
        return node.left ? this.min(node.left) : node.data
    }
    this.max = function (node) {
        if (node === null) return null
        return node.right ? this.max(node.right) : node.data
    }
    this.search = function (data) {
        var node = this.root
        return SearchNode(node, data)
    }

    // 删除节点
    this.remove = function (data) {
        var node = this.root
        return RemoveNode(node, data)
    }
}

// 插入节点
function insertNode(node, newNode) {
     // 递归比较大小
     if (newNode.data < node.data) { // 插入左孩子
        if (node.left === null) {
            node.left = newNode
            return
        } else {
            insertNode(node.left, newNode)
        }
    } else {
        if (node.right === null) { // 插入右孩子
            node.right = newNode
            return
        } else {
            insertNode(node.right, newNode)
        }
    }
}
// 树的节点数
function getCount(node) {
    if (node === null) return 0

    let leftCount = getCount(node.left)
    let rightCount = getCount(node.right)
    return leftCount + rightCount + 1
}
// 树的高度
function getHeight(node) {
    if (node === null) return 0

    let left = getHeight(node.left)
    let right = getHeight(node.right)
    if (left >= right) {
        return left + 1
    } else {
        return right + 1
    }
}
// 查找节点的高度
var count = 0
function getNodeHeight (node, data) {
    // console.log(node)
    if (node === null) return 0

    if (node.data === data) {
        return count + 1
    } else {
        count = count + 1
        if (node.data < data) {
            return getNodeHeight(node.right, data)
        } else {
            return getNodeHeight(node.left, data)
        }
    }


}
// 查找存在与否
function SearchNode (node, data) {
    if (node === null) return false
        // return false // ???不打印--在未被函数包裹的if语句中，内部是不能使用return作为结束的（貌似是新标准），但可以使用break来中断执行的语句；
    // }
    return data === node.data ? true 
                              : (data < node.data ? SearchNode(node.left, data) 
                                                  : SearchNode(node.right, data))
}
// 删除
function RemoveNode(node, data) {
    if (node === null) {
        return null
    }

    if (data < node.data) {
        node.left = RemoveNode(node.left, data)
        return node
    } else if (data > node.data) {
        node.right = RemoveNode(node.right, data)
        return node
    } else {
        // 删除叶子节点
        if (node.left === null && node.right === null) {
            node = null
            return node
        }
        // !删除子节点(含单个子节点)
        if (node.left === null) {
            node = node.right
            return node
        } else if (node.right === null) {
            node = node.left
            return node
        }
        // !!删除子节点(含两个子节点--三步走)
        var aux = findMinNode(node.right)
        node.data = aux.data
        node.right = RemoveNode(node.right, aux.data)
        return node
    }
}
function findMinNode(node) {
    return node.left ? findMinNode(node.left) : node
}

/* --------------------------------------------- */
// 创建二叉树, 打印
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13, 11]
var binaryTree = new BinaryTree()
nodes.forEach(data => {
    binaryTree.insert(data)
})

// 中序打印
// var root = binaryTree.root
// binaryTree.in_order(root)
// 前序打印
// binaryTree.pre_order(root)
// 后序打印
// binaryTree.back_order(root)

// 打印节点数
// console.log(binaryTree.count())
// 打印高度
// console.log(binaryTree.height())
// 查找节点高度
// console.log(binaryTree.nodeHeight(1))

// 查找打印
// console.log(binaryTree.min(root))
// console.log(binaryTree.max(root))
// console.log(binaryTree.search(21))

// 删除
// binaryTree.remove(10)
// console.log(JSON.stringify(root))