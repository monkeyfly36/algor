/* 重要概念:
  Node--节点(data, next), 无头链表(首节点有data和next), 有头链表(首节点有next无data)
  LinkList--方法: head, length,
       print, append, insert, remove, remove_head, remove_tail,
       indexOf, isEmpty, clear  // 13种
*/

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkList {
  constructor() {
    this.head = null
    this.length = 0
  }
  append(data) {
    let node = new Node(data)
    let cur
    if (this.head === null) { // 链表为空
      this.head = node
    } else { // 链表不为空, 遍历链表
      cur = this.head
      while(cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.length += 1
  }
  removeAt(index) {
    let cur = this.head
    let pre
    let i = 0
    if (index < 0 || index >= this.length ) {
      return null
    } else {
      if(index === 0) {
        this.head = cur.next
      } else {
        while(i < index) {
          pre = cur
          cur = cur.next
          i++
        }
        pre.next = cur.next // 删除元素
      }
    }
    this.length -= 1
    cur.next = null
    return cur.data
  }
  insert() {
    
  }
  print() {
    let cur = this.head
    let arr = []
    while(cur) {
      arr.push(cur.data)
      cur = cur.next
    }
    return arr.join('==>')
  }
}

let linklist = new LinkList()
// 新增
linklist.append('1')
linklist.append('jh')
linklist.append('cv')
console.log(linklist.print())
// 删除
console.log(linklist.removeAt(1))
console.log(linklist.print())
// 插入


// export const LinkList = function () {
//   // 私有变量, 实例化不相互影响变量值
//   var Node = function (data) {
//     this.data = data
//     this.next = null
//   }
//   var length = 0
//   var head = null
//   var tail = null

//   this.getNode = (index) => { // 关键
//     if (index < 0 || index >= length) {
//       return null
//     }
//     var i = 0
//     var node = head
//     while (i < index) {
//       i ++
//       node = node.next
//     }
//     return node
//   }

//   this.head = () => {
//     return head.data
//   }
//   this.tail = () => {
//     return tail.data
//   }
//   this.length = () => {
//     return length
//   }

//   this.print = () => {
//     var curNode = head
//     while (curNode) {
//       console.log(curNode.data)
//       curNode = curNode.next
//     }
//   }
//   this.append = (data) => { // 链表末尾添加
//     var node = new Node(data)
//     if (head === null) { // 空链表
//       head = node
//       tail = node
//     } else {
//       tail.next = node
//       tail = node
//     }
//     length ++
//     return true
//   }
//   this.get = (index) => {
//     var node = this.getNode(index)
//     return node ? node.data : null
//   }
//   this.insert = (index, data) => { // 指定位置插入
//     if (index < 0 || index > length) {
//       return false
//     } else if (index === length) {
//       return this.append()
//     } else {
//       var node = new Node(data)
//       if (index === 0) {
//         node.next = head
//         head = node
//       } else {
//         // 找插入节点的前一个节点preNode
//         var	preNode	= this.getNode(index-1)
//         node.next = preNode.next // 定义 新节点的next
//         preNode.next = node // 重新定义 插入位置前节点的next
//       }
//     }
//     length ++
//     return true
//   }
//   this.remove = (index) => {
//     if (index < 0 || index >= length) {
//       return null
//     } else {
//       var delNode = null
//       if (index === 0) {
//         delNode = head
//         head = head.next
//       } else {
//         var	preNode	= this.getNode(index-1)
//         var delNode = preNode.next
//         preNode.next = delNode.next // 核心实现 1->2->3---1->3
//         // var delIndex = 0
//         // var preNode = null
//         // var curNode = head
//         // while (delIndex < index) {
//         //   delIndex ++
//         //   preNode = curNode // 核心--记录两个数据，前节点和被删节点，要用他们的next
//         //   curNode = curNode.next
//         // }
//         // delNode = curNode
//         // preNode.next = curNode.next // 核心实现

//         if (delNode.next === null) { // 边界条件--删除最后一位
//           tail = preNode
//         }
//       }
//     }
//     length --
//     delNode.next = null // delNode可以不写，但c++指针会报错
//     return delNode.data // 有返回值，返回当前节点数据
//   }
//   this.remove_head = () => {
//     return this.remove(0)
//   }
//   this.remove_tail = () => {
//     return this.remove(this.length - 1)
//   }

//   this.indexOf = (data) => { // 返回指定元素的索引,如果没有,返回-1.有多个相同元素,返回第⼀个
//     var i = -1
//     var node = head
//     while (node) {
//       i ++
//       if (node.data === data) {
//         return i
//       } else {
//         node = node.next
//       }
//     }
//     return -1
//   }
//   this.clear = () => {
//     head = null
//     tail = null
//     length = 0
//   }
//   this.isEmpty = () => {
//     return length === 0
//   }
// }
