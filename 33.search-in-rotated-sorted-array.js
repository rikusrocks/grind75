/*
 * @lc app=leetcode.cn id=33 lang=javascript
 * @lcpr version=30204
 *
 * [33] 搜索旋转排序数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right)/2)
        if(target === nums[mid]) {
            return mid
        }
        // left side of mid is sorted
        if(nums[mid] > nums[right]) {
            // consider if the result is in the left side or not
            if(target < nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // right side of mid is sorted
            // consider if the result is in the right side or not
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
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
// [4,5,6,7,0,1,2]\n3\n
// @lcpr case=end

// @lcpr case=start
// [3, 1]\n0\n
// @lcpr case=end

 */

