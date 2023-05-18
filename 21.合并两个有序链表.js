/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * @lcpr version=21908
 *
 * [21] 合并两个有序链表
 */

// @lc code=start


 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let prehead = new ListNode(-1)
    let prev = prehead
    while(list1 && list2) {
        if(list1.val <= list2.val){
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    prev.next = list1 || list2
    return prehead.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = mergeTwoLists;
// @lcpr-after-debug-end