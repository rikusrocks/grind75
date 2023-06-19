/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=21909
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pre = nums[0]

    for(let i = 1; i < nums.length;) {
        if(nums[i] === pre) {
            nums.splice(i,1)
        } else {
            pre = nums[i]
            i ++
        }
    }
    return nums.length
};

// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = removeDuplicates;
// @lcpr-after-debug-end