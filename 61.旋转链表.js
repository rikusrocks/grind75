/*
 * @lc app=leetcode.cn id=61 lang=javascript
 * @lcpr version=21909
 *
 * [61] 旋转链表
 */

// @lc code=start

 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null || head.next === null || k === 0) return head
    let dummyHead = head
    let length = 1
    let current = head
    while(dummyHead.next) {
        dummyHead = dummyHead.next
        length++
    }

    let cut = length - k % length
    if(cut === length) return head
    dummyHead.next = head
    while(cut - 1) {
        console.log(current.val)
        current = current.next
        cut--
    }
    let result = current.next
    current.next = null
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n2\n
// @lcpr case=end
 */

