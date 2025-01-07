/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=30204
 *
 * [11] 盛最多水的容器
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let result = 0
    while(left < right) {
        result = Math.max(Math.min(height[left], height[right]) * (right - left), result)
        if(height[left] < height[right]) {
            left ++
        } else {
            right --
        }
    }
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [1,8,6,2,5,4,8,3,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = maxArea;
// @lcpr-after-debug-end