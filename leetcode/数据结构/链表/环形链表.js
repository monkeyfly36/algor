/*
  给定一个链表，判断链表中是否有环
*/
var hasCycle = function(head) {
  // 空间复杂度大O(n)
  // let cache = new Set()
  // while(head) {
  //   if(cache.has(head)) {
  //     return true
  //   } else {
  //     cache.add(head)
  //   }
  //   head = head.next
  // }
  // return false

  // 优化: 空间复杂度小O(1) -- 快慢指针(套圈)
  let slow = head
  let quick = head
  while(quick && quick.next) {
      slow = slow.next
      quick = quick.next.next
      if (slow === quick) {
          return true
      }
  }  
  return false
}

/*
  给定一个链表，判断链表中是否有环, 如有环返回入口节点
*/
var detectCycle = function(head) {
  // let cache = new Set()
  // while(head) {
  //   if(cache.has(head)) {
  //     return head
  //   } else {
  //     cache.add(head)
  //   }
  //   head = head.next
  // }
  // return null

  // 优化 -- 操场套圈，需要引入start变量
  let slow = head
  let quick = head
  let start = head // 为什么？看图解 2*(a+b) = a+b+c+b --> a===c
  while(quick && quick.next) {
      slow = slow.next
      quick = quick.next.next
      if (slow === quick) {
        while(slow && start) {
          if(slow === start) {
            return slow
          }
          slow = slow.next
          start = start.next
        }
      }
  }  
  return null
}