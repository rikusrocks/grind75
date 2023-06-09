/*
 * @lc app=leetcode.cn id=33 lang=javascript
 * @lcpr version=21909
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while(start <= end) {
        let mid = Math.floor((start + end) * 0.5)
        if(nums[mid] === target) {
            return mid
        } 
        if(nums[start] <= nums[mid]) {
            if(target < nums[start] || target > nums[mid]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        } else {
            if(target < nums[mid] || target > nums[end]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
    }
    return -1
};
// @lc code=end



/*
// @lcpr case=start
// [4,5,6,7,0,1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,8,9,0,1,2]\n3\n
// [9,10,11,2,3,4,5,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n0\n
// @lcpr case=end

 */

