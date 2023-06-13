/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=21909
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 是否进位
    let addOne = 0
    //新建一个list
    let result = new ListNode(0)
    //指向第一个node
    let cursor = result
    while(l1 || l2 || addOne) {
        //判定是否有l1或者l2，没有的话用0补全值
        let l1val = l1 !== null ? l1.val : 0
        let l2val = l2 !== null ? l2.val : 0
        //相加结果，赋值给下个node
        let add = l1val + l2val + addOne
        addOne = add >= 10 ? 1 : 0
        cursor.next = new ListNode(add % 10)
        cursor = cursor.next
        l1 = l1 !== null ? l1.next : null
        l2 = l2 !== null ? l2.next : null
    }
    //因为第一个node是新建的0，所以返回next
    return result.next
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */

