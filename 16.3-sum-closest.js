/*
 * @lc app=leetcode.cn id=16 lang=javascript
 * @lcpr version=21913
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let result = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < nums.length - 2; i++) {
        let start = i + 1
        let end = nums.length - 1
        while(start < end) {
            let currentNumber = nums[i] + nums[start] + nums[end]
            if(Math.abs(currentNumber - target) < Math.abs(result - target)) {
                result = currentNumber
            }
            if(currentNumber >= target) {
                end--
            } else {
                start++
            }
        }
    }
    return result
};
// @lc code=end



/*
// @lcpr case=start
// [-1,2,1,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n1\n
// @lcpr case=end

 */

