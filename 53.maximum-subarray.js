/*
 * @lc app=leetcode.cn id=53 lang=javascript
 * @lcpr version=30204
 *
 * [53] 最大子数组和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return nums[0]
    let arr = []
    let result = nums[0]
    let curCount = nums[0]
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        if(element >= 0 && curCount > 0) {
            arr.push(element)
            curCount += element
        } else if(element >= 0 && curCount <= 0) {
            arr = [element]
            curCount = element
        } else if(element < 0 && curCount > 0) {
            arr.push(element)
            curCount += element
        } else {
            curCount = element
            arr = [element]
        }
        result = result > curCount ? result : curCount
    }
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */

