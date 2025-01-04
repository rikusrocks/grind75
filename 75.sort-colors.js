/*
 * @lc app=leetcode.cn id=75 lang=javascript
 * @lcpr version=30204
 *
 * [75] 颜色分类
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0
    let white = 0
    let blue = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element === 0) red ++
        if(element === 1) white ++
        if(element === 2) blue ++
    }
    return nums.fill(0, 0, red).fill(1, red, red + white).fill(2, red + white) 
};
// @lc code=end



/*
// @lcpr case=start
// [2,0,2,1,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,0,1]\n
// @lcpr case=end

 */

