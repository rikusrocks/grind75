/*
 * @lc app=leetcode.cn id=103 lang=javascript
 * @lcpr version=21909
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let result = [[root.val]]
    const order = (root, level) => {
        if(!root) return
        if(root.left === null && root.right === null) {
            return;
        }
        if(!result[level]) {
            result[level] = []
        }
        if(root.left) {
            level % 2 === 0 ? result[level].push(root.left.val) : result[level].unshift(root.left.val)
        }
        if(root.right) {
            level % 2 === 0 ? result[level].push(root.right.val) : result[level].unshift(root.right.val)
        }

        order(root.left, level + 1)
        order(root.right, level + 1)
    }
    order(root, 1)
    return result   
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

