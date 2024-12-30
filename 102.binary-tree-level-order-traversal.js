/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30204
 *
 * [102] 二叉树的层序遍历
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let queue = [[root.val]]
    const iterate = (root, level) => {
        if(!root) return;
        if(root.left === null && root.right === null) return;
        if(!queue[level]) queue[level] = []
        if(root.left) {
            queue[level].push(root.left.val)
        }
        if(root.right) {
            queue[level].push(root.right.val)
        }
        iterate(root.left, level + 1)
        iterate(root.right, level + 1)
        return root.val
    }
    iterate(root, 1)
    return queue
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

