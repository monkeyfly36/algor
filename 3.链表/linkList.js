/* 重要概念: 
  节点(data, next), 无头链表(首节点有data和next), 有头链表(首节点有next无data)
  方法: append, insert, remove, remove_head, remove_tail, indexOf,
        get, head, tail, length, isEmpty, clear, print // 13种
*/

function LinkList () {
  var Node = function (data) {
    this.data = data
    this.next = null
  }
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
  this.insert = (data, index) => {

  }
  this.remove = (index) => {

  }
  this.remove_head = () => {

  }
  this.remove_tail = () => {

  }
  this.indexOf = (data) => {

  }
  
  
}