/*
 * @lc app=leetcode.cn id=226 lang=javascript
 * @lcpr version=21908
 *
 * [226] 翻转二叉树
 */

// @lc code=start


 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // if(root === null) return root
    // let temp = root.left
    // root.left = root.right
    // root.right = temp
    // invertTree(root.left)
    // invertTree(root.right)
    // return root

    let queue = []
    if(root !== null) queue.push(root)
    while(queue.length) {
        let top = queue.shift()
        const temp = top.left
        top.left = top.right
        top.right = temp
        if(top.left) {
            queue.push(top.left)
        }
        if(top.right) {
            queue.push(top.right)
        }
    }
    return root
};
// @lc code=end



/*
// @lcpr case=start
// [4,2,7,1,3,6,9]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

