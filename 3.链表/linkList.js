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

  
  this.append = (data) => {
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
  // this.insert = (data, index) => {

  // }
  // this.remove = (index) => {

  // }
  // this.remove_head = () => {

  // }
  // this.remove_tail = () => {

  // }
  // this.indexOf = (data) => {

  // }
}

