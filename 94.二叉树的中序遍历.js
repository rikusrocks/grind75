/*
 * @lc app=leetcode.cn id=94 lang=javascript
 * @lcpr version=21909
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start

  //Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // const result = []
    // const reorder = (root) => {
    //     if(!root) {
    //         return;
    //     }
    //     reorder(root.left)
    //     result.push(root.val)
    //     reorder(root.right)
    // }
    // reorder(root)
    // return result
    const result = []
    const stack = []
    while(root || stack.length) {
        if(root) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

