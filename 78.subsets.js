/*
 * @lc app=leetcode.cn id=78 lang=javascript
 * @lcpr version=30204
 *
 * [78] 子集
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]]
    let path = []
    const backtrack = (i) => {
        for(let j = i; j < nums.length; j ++) {
            path.push(nums[j])
            backtrack(j + 1)
            result.push([...path])
            path.pop()
        }
    }
    backtrack(0)
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */

