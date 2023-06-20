/*
 * @lc app=leetcode.cn id=1509 lang=javascript
 * @lcpr version=21909
 *
 * [1509] 三次操作后最大值与最小值的最小差
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    nums.sort((a,b) => a-b)
    let n = nums.length
    if(n <= 3) return 0
    return Math.min(nums[n - 4] - nums[0], nums[n - 3] - nums[1], nums[n - 2] - nums[2], nums[n - 1] - nums[3])
};
// @lc code=end



/*
// @lcpr case=start
// [5,3,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,5,0,10,14]\n
// @lcpr case=end

// @lcpr case=start
// [3,100,20]\n
// @lcpr case=end

 */

