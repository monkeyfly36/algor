/*
  删除链表中等于给定值 val 的所有节点。
  输入: 1->2->6->3->4->5->6, val = 6
  输出: 1->2->3->4->5
*/
var removeElements = function(head, val) {
  // 增删改都一样--引入哨兵元素 a=>b=>c   哨兵=>a=>b=>c
  let ele = { next: head }
  let cur = ele
  while(cur.next) {
    if(cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return ele.next
}