/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=21913
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    let prevList = lists[0]
    for(let i = 1; i < lists.length; i ++) {
        let dummy = new ListNode(-1)
        let d = dummy
        let curList = lists[i]
        let curListP = curList
        let preListP = prevList
        while(curListP !== null && preListP !== null) {
            if(curListP.val > preListP.val) {
                d.next = preListP
                preListP = preListP.next
            } else {
                d.next = curListP
                curListP = curListP.next
            }
            d = d.next
        }
        if(curListP !== null) {
            d.next = curListP
        }
        if(preListP !== null) {
            d.next = preListP
        }
        prevList = dummy.next
    }

    return prevList
};
// @lc code=end



/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */

