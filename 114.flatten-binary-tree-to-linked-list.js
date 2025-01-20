/*
 * @lc app=leetcode.cn id=114 lang=javascript
 * @lcpr version=30204
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let list = []
    pretraverse(root, list)
    const size = list.length
    for(let i = 1; i < size; i++) {
        let prev = list[i - 1], cur = list[i]
        prev.left = null
        prev.right = cur
    }
};

const pretraverse = (root, list) => {
    if(root !== null) {
        list.push(root)
        pretraverse(root.left, list)
        pretraverse(root.right, list)
    }
}

// @lc code=end



/*
// @lcpr case=start
// [1,2,5,3,4,null,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

