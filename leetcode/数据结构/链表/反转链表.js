/*
  反转一个单链表。
  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
*/

var reverseList = function(head) {
  let cur = head
  let pre = null

  while(cur) {
    // let next = cur.next // 存后一位
    // cur.next = pre // 先改变指针, 后改变位置
    // pre = cur
    // cur = next

    // 优化 -- 解构
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  return prev
}