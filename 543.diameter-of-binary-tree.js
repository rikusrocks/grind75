/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * @lcpr version=30204
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let ans = 0
    const dfs = (root) => {
        // to the bottom root
        if(!root) return 0
        // dfs get the left and right depth
        let leftDepth = dfs(root.left)
        let rightDepth = dfs(root.right)
        // calculate max distance
        ans = Math.max(ans, leftDepth + rightDepth)
        // return current distance
        // like, when bottom root, leftDepth and rightDepth are 0, distance is 1
        return Math.max(leftDepth, rightDepth) + 1
    }
    dfs(root)
    return ans
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

