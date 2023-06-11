/*
 * @lc app=leetcode.cn id=35 lang=javascript
 * @lcpr version=21909
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    //if(nums.indexOf(target) > 0) return nums.indexOf(target)
    while(start <= end) {
        let mid = Math.floor((start + end) * 0.5)
        if(target === nums[mid]) {
            return mid
        }
        if(target < nums[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return start
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,5,6]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n7\n
// @lcpr case=end

 */

