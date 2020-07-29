// 栈没法冒泡, 只能一端进
// 栈的方法: push, pop, top, size, isEmpty, clear // 6种
export const Stack = function () {
  var items = []
  // 压栈
  this.push = function (item) {
    items.push(item)
  }
  // 弹出栈
  this.pop = () => {
    return items.pop()
  }
  this.top = () => {
    return items[items.length -1]
  }
  this.isEmpty = () => {
    return items.length === 0
  }
  this.size = () => {
    return items.length
  }
  this.clear = () => {
    items = []
  }
}