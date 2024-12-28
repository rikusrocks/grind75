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
    let result = nums[0]
    let curCount = nums[0]
    for (let index = 1; index < nums.length; index++) {
        const element = nums[index];
        // curCount + element = all previous added result without change the first start number
        // if the number is larger than previous added result, change the first start number
        // this means the count for this certain array of number is done, jump to the next 
        // counting of array of number

        curCount = Math.max(element, curCount + element)
        result = Math.max(result, curCount)
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

