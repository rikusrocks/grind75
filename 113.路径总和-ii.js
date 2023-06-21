/*
 * @lc app=leetcode.cn id=113 lang=javascript
 * @lcpr version=21909
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if(!root) return []
    let result = []
    const traversal = (root, sum, path) => {
        if(!root) return
        sum += root.val
        path.push(root.val)
        if(root.right === null && root.left === null && sum === targetSum) {
            console.log(result)
            result.push(path.slice())
        } else {
            traversal(root.left, sum, path)
            traversal(root.right, sum, path)
        }
        //因为path是共用的，所以要把刚才push进去的参数pop出来
        path.pop()
    }
    traversal(root, 0, [])
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [5,4,8,11,null,13,4,7,2,null,null,5,1]\n22\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

 */

