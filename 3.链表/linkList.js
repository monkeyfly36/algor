/* 重要概念: 
  节点(data, next), 无头链表(首节点有data和next), 有头链表(首节点有next无data)
  方法: print, append, insert, remove, remove_head, remove_tail, indexOf,
        get, head, tail, length, isEmpty, clear  // 13种
*/

export const LinkList = function () {
  var Node = function (data) {
    this.data = data
    this.next = null
  }
  var length = 0
  var head = null
  var tail = null

  
  this.append = (data) => { // 链表末尾添加
    var node = new Node(data)
    if (head === null) { // 空链表
      head = node
      tail = node
    } else {
      tail.next = node
      tail = node
    }
    length ++
    return true
  }
  this.print = () => {
    var curNode = head
    while (curNode) {
      console.log(curNode.data);
      curNode = curNode.next
    }
  }
  // var
  this.insert = (index, data) => { // 指定位置插入
    if (index < 0 || index > length) {
      return false
    } else if (index === length) {
      return this.append()
    } else {
      var node = new Node(data)
      if (index === 0) {
        node.next = head
        head = node
      } else {
        var i = 1
        var preNode = head 
        while (i < index) {
          i ++
          preNode = preNode.next
        }
        var nextNode = preNode.next // 暂存插入位置后节点
        preNode.next = node // 重新定义 插入位置前节点的next
        node.next = nextNode // 定义 新节点的next  
      }
    }
    length ++
    return true
  }
  this.remove = (index) => {
    if (index < 0 || index >= length) {
      return null
    } else {
      var delNode = null
      if (index === 0) {
        delNode = head
        head = head.next
      } else {
        var delIndex = 0
        var preNode = null
        var curNode = head
        while (delIndex < index) {
          delIndex ++
          preNode = curNode // 核心--记录两个数据，前节点和被删节点，要用他们的next
          curNode = curNode.next
        }
        delNode = curNode
        preNode.next = curNode.next // 核心实现

        if (curNode.next === null) { // 边界条件--删除最后一位
          tail = preNode
        }
      }
    }
    length --
    delNode.next = null // delNode可以不写，但c++指针会报错
    return delNode.data // 有返回值，返回当前节点数据
  }
  this.get = (index) => {
    if (index < 0 || index >= length) {
      return null
    }
    var i = 0
    var node = head
    while (i < index) {
      i ++
      node = node.next
    }
    return node.data
  }
  // this.remove_head = () => {

  // }
  // this.remove_tail = () => {

  // }
  // this.indexOf = (data) => {

  // }
}

