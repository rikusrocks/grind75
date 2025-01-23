/*
 * @lc app=leetcode.cn id=617 lang=javascript
 * @lcpr version=30204
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // const dfs = (root1, root2) => {
    //     if(root1 === null && root2 === null) return null
    //     if(root1 === null && root2) return root2
    //     if(root1 && root2 === null) return root1
    //     root1.val += root2.val
    //     root1.left = dfs(root1.left, root2.left)
    //     root1.right = dfs(root1.right, root2.right)
    //     return root1
    // }
    // const result = dfs(root1, root2)
    // return result
    if(!root1 || !root2) return root1 || root2
    let queue = [[root1, root2]]
    while(queue.length) {
        let [h1, h2] = queue.shift()
        if(h1 && h2) h1.val += h2.val

        if(h1.left && h2.left) queue.push([h1.left, h2.left])
        if(h1.right && h2.right) queue.push([h1.right, h2.right])
        if(!h1.left && h2.left) h1.left = h2.left
        if(!h1.right && h2.right) h1.right = h2.right
    }
    return root1
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,2,5]\n[2,1,3,null,4,null,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n[1]\n
// @lcpr case=end

 */

