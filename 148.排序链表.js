/*
 * @lc app=leetcode.cn id=148 lang=javascript
 * @lcpr version=21909
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function(head) {
    // provide a result to return
    let result = []
    // if an empty list, return null
    if(!head) return null
    // break the link to nodes,
    // by pushing the node to result array, and let the next pointer to null
    while(head) {
        result.push(head)
        let temp = head.next
        head.next = null
        head = temp
    }
    //use sort function to sort the array to get an increasing array
    //use reduce to combine each node in the array
    //return the first node in the array
    result.sort((a, b) => a.val - b.val).reduce((a,b) => a.next = b)
    return result[0]
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1,5,3,4,0]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

