/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=21909
 *
 * [92] 反转链表 II
 */

// @lc code=start

 //Definition for singly-linked list.
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let pre = new ListNode(0, head)
    let newHead = pre
    for(let i = 0; i < left - 1; i++) {
        newHead = newHead.next
    }
    let rightNode = newHead
    for(let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }

    let leftNode = newHead.next
    let tempRightNode = rightNode.next

    newHead.next = null
    rightNode.next = null
    reverse(leftNode)

    newHead.next = rightNode
    leftNode.next = tempRightNode
    return pre.next
};

const reverse = (head) => {
    let pre = null
    let current = head
    while(current) {
        const tempNext = current.next
        current.next = pre
        pre = current
        current = tempNext
    }
}
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */

