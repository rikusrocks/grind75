/*
 * @lc app=leetcode.cn id=111 lang=javascript
 * @lcpr version=21909
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0
    if(root.left === null && root.right === null) return 1
    let ans = Number.MAX_SAFE_INTEGER
    if(root.left !== null) {
        ans = Math.min(ans, minDepth(root.left))
    }
    if(root.right !== null) {
        ans = Math.min(ans, minDepth(root.right))
    }
    return ans + 1
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [2,null,3,null,4,null,5,null,6]\n
// @lcpr case=end

 */

