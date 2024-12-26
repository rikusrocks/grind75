/*
 * @lc app=leetcode.cn id=169 lang=javascript
 * @lcpr version=30204
 *
 * [169] 多数元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    let resultNum = 0
    let result
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(map[element]) {
            map[element] = map[element] + 1
        } else {
            map[element] = 1
        }
        resultNum = resultNum > map[element] ? resultNum : map[element]
        result = resultNum > map[element] ? result : element
    }
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [3,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,1,1,2,2]\n
// @lcpr case=end

 */

