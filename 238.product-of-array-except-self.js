/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30204
 *
 * [238] 除自身以外数组的乘积
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = []
    let length = nums.length
    arr[0] = 1
    for(let i = 1; i < length; i ++){
        arr[i] = arr[i - 1] * nums[i - 1]
    }
    let right = 1
    for(let j = length - 2; j >=0; j--) {
        right = right * nums[j + 1]
        arr[j] = arr[j] * right
    }
    return arr
};

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */

