/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=21909
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    let result = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0])
    //不管怎么切割前中后序遍历的树，左右树的长度和数字都是一样的
    //所以是可以用inorder中root的index切preorder的数组
    result.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    result.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

