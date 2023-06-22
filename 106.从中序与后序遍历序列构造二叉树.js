/*
 * @lc app=leetcode.cn id=106 lang=javascript
 * @lcpr version=21909
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!postorder.length) return null
    const val = postorder.pop()
    let result = new TreeNode(val)
    let index = inorder.indexOf(val)
    result.left = buildTree(inorder.splice(0, index), postorder.splice(0, index))
    result.right = buildTree(inorder.splice(1), postorder)
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

