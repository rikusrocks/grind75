/*
 * @lc app=leetcode.cn id=108 lang=javascript
 * @lcpr version=21909
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start

// Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null
    const index = Math.floor(nums.length * 0.5)
    const head = new TreeNode(nums[index]);
    let left = index - 1
    let right = index + 1
    if(left >= 0) {
        head.left = sortedArrayToBST(nums.slice(0, index))
    }
    if(right < nums.length) {
        head.right = sortedArrayToBST(nums.slice(right))
    }

    return head
};
// @lc code=end



/*
// @lcpr case=start
// [-10,-3,0,5,9]\n
// @lcpr case=end

// @lcpr case=start
// [1,3]\n
// @lcpr case=end

 */

