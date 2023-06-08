/*
 * @lc app=leetcode.cn id=104 lang=javascript
 * @lcpr version=21909
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    let result = 0
    const traversal = (root, level) => {
        if(!root) {
            result < level ? result = level : result = result
            return
        }
        traversal(root.left, level + 1)
        traversal(root.right, level + 1)
    }
    traversal(root, 0)
    return result
};
// @lc code=end



