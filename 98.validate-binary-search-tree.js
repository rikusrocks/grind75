/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * @lcpr version=30204
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // root val needs to be bigger than all values on its left, 
    // and smaller than all values on its right
   const dfs = (root, min, max) => {
        if(!root) return true
        return root.val > min && root.val < max &&
        dfs(root.right, root.val, max) && dfs(root.left, min, root.val)
   }
   let result = dfs(root, -Infinity, Infinity)
   return result
};
// @lc code=end



/*
// @lcpr case=start
// [0,-1]\n
// @lcpr case=end

// @lcpr case=start
// [5,1,4,null,null,3,6]\n
// @lcpr case=end

 */

