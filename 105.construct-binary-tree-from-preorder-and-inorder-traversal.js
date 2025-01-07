/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30204
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */


// @lcpr-template-start

// @lcpr-template-end
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
    // in the inorder, the node on the left of the root is always 
    // having smaller index than the root node
    if(!preorder.length) return null
    let result = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0])
    // in the inorder array, the number of left nodes of the root nodes 
    // equals the number of left nodes that on the right side of 
    // the root node in the preorder array, means that, the slice of the preorder array
    // from 1 to index, and the index is equal to the index of slice 
    // from 0 to index in the inorder array
    // the second index in the slice function is not included, so it's in preorder is index + 1
    // and the root node is to be removed, so the inorder slice need a index + 1 to the end
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

