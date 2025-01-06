/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * @lcpr version=30204
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []
    let queue = [[root.val]]
    let result = []
    const bfs = (root, level) => {
        if(!root) return
        if(!root.left && !root.right) return
        if(!queue[level]) {
            queue[level] = []
        }
        if(root.left) queue[level].push(root.left.val)
        if(root.right) queue[level].push(root.right.val)
         bfs(root.left, level + 1)
         bfs(root.right, level + 1)
    }
    bfs(root, 1)
    for (let i = 0; i < queue.length; i++) {
       result.push(queue[i][queue[i].length - 1]) 
    }
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,null,null,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

