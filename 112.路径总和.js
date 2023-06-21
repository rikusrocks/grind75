/*
 * @lc app=leetcode.cn id=112 lang=javascript
 * @lcpr version=21909
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let flag = false
    if(!root) return flag
    let sum = 0
    const traversal = (root, sum) => {
        if(!root) return 0
        sum = sum + root.val
        if(sum === targetSum && root.right === null && root.left === null) {
            flag = true
        }
        traversal(root.left, sum)
        traversal(root.right, sum)
    }
    traversal(root, sum)
    return flag
};
// @lc code=end



/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,null,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */

