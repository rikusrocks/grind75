/*
 * @lc app=leetcode.cn id=133 lang=javascript
 * @lcpr version=30204
 *
 * [133] 克隆图
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let result = new Map()
    if(!node) return
    const search = (node) => {
        const nCopy = new Node(node.val);
        result.set(node, nCopy);
        if(node.neighbors) {
            node.neighbors.forEach(element => {
                if(!result.has(element)) {
                    search(element)
                }
                nCopy.neighbors.push(result.get(element))
                result.set(nCopy)
            });
        }
    }
    search(node)
    return result.get(node)
};
// @lc code=end



/*
// @lcpr case=start
// [[2,4],[1,3],[2,4],[1,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

