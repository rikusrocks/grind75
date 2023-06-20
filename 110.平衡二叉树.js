/*
 * @lc app=leetcode.cn id=110 lang=javascript
 * @lcpr version=21909
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let result = true
    if(!root) return true
    const traversal = (root) => {
        while(!root) {
            return 0
        }
        if(!result) return
        let leftDepth = traversal(root.left)
        let rightDepth = traversal(root.right)
        if(Math.abs(leftDepth - rightDepth) > 1) {
            result = false
        }
        return 1 + Math.max(leftDepth, rightDepth)
    }
    traversal(root)
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,3,3,null,null,4,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

