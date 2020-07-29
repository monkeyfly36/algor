// 队列只能一端进,另一端出
// 栈的方法: enqueue, dequeue, head, tail, size, isEmpty, clear // 7种
export const Queue = function () {
  var items = []

  this.enqueue = (item) => {
    items.push(item)
  }
  this.dequeue = () => {
    return items.shift()
  }
  this.head = () => {
    return items[0]
  }
  this.tail = () => {
    return items[items.length-1]
  }
  this.size = () => {
    return items.length
  }
  this.clear = () => {
    items = []
  }
  this.isEmpty = () => {
    return items.length === 0
  }
}