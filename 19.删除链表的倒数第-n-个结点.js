/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=21909
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start

//Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let newList = new ListNode(0, head);
    let rightPointer = newList
    let leftPointer = newList
    while(n--) {
        rightPointer = rightPointer.next
    }
    //if(!rightPointer) return newList.next
    while(rightPointer.next) {
        rightPointer = rightPointer.next
        leftPointer = leftPointer.next
    }
    leftPointer.next = leftPointer.next.next
    return newList.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */

