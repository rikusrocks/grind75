/*
 * @lc app=leetcode.cn id=46 lang=javascript
 * @lcpr version=30204
 *
 * [46] 全排列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let temp = []
    const backtracking = (temp) => {
        if(temp.length === nums.length) {
            result.push([...temp])
            return
        }
        for(let index = 0; index < nums.length; index ++) {
            let element = nums[index]
            if(temp.indexOf(element) < 0) {
                temp.push(element)
                backtracking(temp)
                temp.pop()
            }
        }
    }
    backtracking(temp)
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

