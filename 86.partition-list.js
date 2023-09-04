/*
 * @lc app=leetcode.cn id=86 lang=javascript
 * @lcpr version=21913
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummyNodeUnder = new ListNode(-1)
    let dummyNodeOver = new ListNode(-1)
    let p = head, pu = dummyNodeUnder, po = dummyNodeOver

    while(p !== null) {
        if(p.val < x) {
            pu.next = p
            pu = pu.next
        } else {
            po.next = p
            po = po.next
        }
        let temp = p.next
        p.next = null
        p = temp
    }

    pu.next = dummyNodeOver.next
    return dummyNodeUnder.next
};

// @lc code=end



/*
// @lcpr case=start
// [1,4,3,2,5,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,1]\n2\n
// @lcpr case=end

 */

