/*
 * @lc app=leetcode.cn id=230 lang=javascript
 * @lcpr version=30204
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */

// inorderTraversal is from left root to root to right root
var kthSmallest = function(root, k) {
    let result = []
    const dfs = (root) => {
        if(!root) return
        dfs(root.left)
        result.push(root)
        dfs(root.right)
    }
    dfs(root)
    return result[k - 1].val
};
// @lc code=end



/*
// @lcpr case=start
// [3,1,4,null,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [5,3,6,2,4,null,null,1]\n3\n
// @lcpr case=end

 */

