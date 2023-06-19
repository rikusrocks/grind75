/*
 * @lc app=leetcode.cn id=24 lang=javascript
 * @lcpr version=21909
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start

 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let dummyList = new ListNode(0, head)
    let dummyHead = dummyList
    while(dummyHead.next !== null) {
        let pre = dummyHead //0 //2
        let cur = dummyHead.next  //1
        let next
        if(cur.next) {
            next = cur.next
        } else {
            return dummyList.next
        }
        cur.next = cur.next.next //3
        next.next = cur
        pre.next = next
        dummyHead = cur
    }
    return dummyList.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */

