/*
 * @lc app=leetcode.cn id=138 lang=javascript
 * @lcpr version=30204
 *
 * [138] 随机链表的复制
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let map = new Map()
    let cur = head
    while(cur) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    cur = head
    while(cur) {
        map.get(cur).next = map.get(cur.next) || null
        map.get(cur).random = map.get(cur.random) || null
        cur = cur.next
    }
    return map.get(head)
};
// @lc code=end



/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

 */

