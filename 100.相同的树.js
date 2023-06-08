/*
 * @lc app=leetcode.cn id=100 lang=javascript
 * @lcpr version=21909
 *
 * [100] 相同的树
 */

// @lc code=start

  //Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let result = true
    const order = (p, q) => {
        if(!q && !p) {
            return;
        }
        if(!p && q) {
            return result = false;
        }
        if(p && !q) {
            return result = false;
        }
        if(p.val !== q.val) {
            return result = false
        }
        if(p.val === q.val) {
          order(p.left, q.left)
          order(p.right, q.right)
        }
    }
    order(p, q)
    return result
};

// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n[1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[1,null,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1]\n[1,1,2]\n
// @lcpr case=end

 */

