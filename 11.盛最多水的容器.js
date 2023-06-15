/*
 * @lc app=leetcode.cn id=11 lang=javascript
 * @lcpr version=21909
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max
    while(left < right) {
        let range = right - left
        let area = height[left] > height[right] ? height[right] * range : height[left] * range
        height[left] > height[right] ? right -- : left ++
        max = max > area ? max : area
    }
    return max
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

